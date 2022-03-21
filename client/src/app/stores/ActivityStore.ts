import {allCategories} from "./../../features/activities/categories"
import {makeAutoObservable} from "mobx"
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

  loadActivities = async () => {
    this.loading = true
    try {
      this.activities = await agent.Activities.list()
      this.detailedActivity = this.activities[0]
      this.loading = false
    } catch (error) {
      console.log(error)
      this.loading = false
    }
  }

  selectActivityDetails = (activity: Activity) => {
    this.detailedActivity = activity
    this.inEditMode = false
  }

  closeEditMode = async (activity: Activity | undefined) => {
    this.submitting = true
    console.log("should work when not editing")

    if (activity !== undefined) {
      console.log("should work when Editing")
      await agent.Activities.update(activity)
      this.activities = this.activities.map(a => (a.id === activity.id ? activity : a))
      this.detailedActivity = this.activities.find(a => a.id === activity.id)
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
      this.activities = this.activities.filter(a => a.id !== this.detailedActivity?.id)
      this.submitting = false
      this.toggleEditMode()
      this.detailedActivity = undefined
    }
  }

  createActivity = async (activity: Activity) => {
    this.submitting = true
    await agent.Activities.create(activity)
    this.submitting = false
  }
}
