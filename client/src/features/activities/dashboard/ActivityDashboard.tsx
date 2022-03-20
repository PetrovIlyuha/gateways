import axios from "axios"
import {useEffect, useState} from "react"
import {Activity} from "../../../app/layout/models/activity"
import DetailedActivity from "../details/DetailedActivity"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [detailedActivity, setDetailedActivity] = useState<Activity | undefined>()
  const [updatedActivityId, setUpdatedActivityId] = useState<string>()
  const [inEditMode, setInEditMode] = useState<boolean>(false)
  const [categories, setCategories] = useState<string[] | undefined>()

  useEffect(() => {
    axios.get<Activity[]>("http://localhost:5000/api/activities").then(response => {
      setActivities(response.data)
      setDetailedActivity(response.data[0])
    })
  }, [])

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(activities.map(a => a.category)))
    setCategories(uniqueCategories)
  }, [activities])

  useEffect(() => {
    setDetailedActivity(activities.find(a => a.id === updatedActivityId))
  }, [updatedActivityId, activities])

  const toggleEditMode = () => setInEditMode(prev => !prev)

  const selectActivityDetailedView = (activity: Activity) => {
    setDetailedActivity(activity)
    setInEditMode(false)
  }

  const removeActivity = (id: string) => {
    toggleEditMode()
    setDetailedActivity(undefined)
    setActivities([...activities.filter(a => a.id !== id)])
  }

  const closeEditMode = (activity: Activity | undefined) => {
    if (activity !== undefined) {
      setActivities(activities => activities.map(a => (a.id === activity.id ? activity : a)))
      setUpdatedActivityId(activity.id)
    }
    toggleEditMode()
  }

  const closeViewMode = () => (inEditMode ? toggleEditMode() : setDetailedActivity(undefined))

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ActivityList activities={activities} selectActivityDetailedView={selectActivityDetailedView} />
      <div className="w-1/2">
        {detailedActivity ? (
          <DetailedActivity
            detailedActivity={detailedActivity}
            inEditMode={inEditMode}
            closeViewMode={closeViewMode}
            closeEditMode={closeEditMode}
            categories={categories}
            removeActivity={removeActivity}
          />
        ) : null}
      </div>
    </div>
  )
}

export default ActivityDashboard
