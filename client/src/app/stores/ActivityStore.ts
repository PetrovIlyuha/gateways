import {allCategories} from "./../../features/activities/categories"
import {makeAutoObservable, runInAction} from "mobx"
import {Activity} from "../layout/models/activity"
import agent from "../api/agent"

export default class ActivityStore {
  activities: Activity[] = []
  detailedActivity?: Activity
  inEditMode = false
  categories: string[] = allCategories
  loading = false
  loadingInitial = false
  submitting: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  get activitiesByDate() {
    return this.activities.reduce((activities, activity) => {
      const date = activity.date
      activities[date] = activities[date] ? [...activities[date], activity] : [activity]
      return activities
    }, {} as {[key: string]: Activity[]})
    // return this.activities.slice().sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  loadActivities = async () => {
    this.loading = true
    try {
      this.activities = await agent.Activities.list()
      runInAction(() => {
        // this.detailedActivity = this.activities[0]
        this.loading = false
      })
    } catch (error) {
      console.log(error)
      runInAction(() => {
        this.loading = false
      })
    }
  }

  loadActivity = async (id: string) => {
    let activity = this.activities.find(act => act.id === id)
    if (activity) {
      runInAction(() => {
        this.detailedActivity = activity
      })
    } else {
      runInAction(() => {
        this.loading = true
      })
      try {
        let activity = await agent.Activities.details(id)
        runInAction(() => {
          this.detailedActivity = activity
        })
      } catch (err) {
        console.log(err)
        runInAction(() => {
          this.loading = false
        })
      }
      runInAction(() => {
        this.loading = false
      })
    }
  }

  selectActivityDetails = (activity: Activity) => {
    runInAction(() => {
      this.detailedActivity = activity
      this.inEditMode = false
    })
  }

  closeEditMode = async (activity: Activity | undefined) => {
    this.submitting = true
    if (activity !== undefined) {
      await agent.Activities.update(activity)
      runInAction(() => {
        this.activities = this.activities.map(a => (a.id === activity.id ? activity : a))
        this.detailedActivity = this.activities.find(a => a.id === activity.id)
      })
    }
    this.submitting = false
    this.toggleEditMode()
  }

  toggleEditMode = () => (this.inEditMode = !this.inEditMode)

  closeViewMode = () =>
    this.inEditMode ? this.toggleEditMode() : (this.detailedActivity = undefined)

  removeActivity = async () => {
    this.submitting = true
    if (this.detailedActivity) {
      await agent.Activities.delete(this.detailedActivity.id)

      this.toggleEditMode()
      runInAction(() => {
        this.activities = this.activities.filter(a => a.id !== this.detailedActivity?.id)
        this.detailedActivity = undefined
      })
    }
    this.submitting = false
  }

  createActivity = async (activity: Activity) => {
    this.submitting = true
    await agent.Activities.create(activity)
    this.submitting = false
  }
}
