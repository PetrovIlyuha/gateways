import axios from "axios"
import {useEffect, useState} from "react"
import {Activity} from "../../../app/layout/models/activity"
import DetailedActivity from "../details/DetailedActivity"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [detailedActivity, setDetailedActivity] = useState<
    Activity | undefined
  >(undefined)
  const [inEditMode, setInEditMode] = useState<boolean>(false)

  const toggleEditMode = () => setInEditMode(prev => !prev)

  const selectActivityDetailedView = (activity: Activity) => {
    setDetailedActivity(activity)
    setInEditMode(false)
  }

  const closeActivityDetails = () =>
    inEditMode ? toggleEditMode() : setDetailedActivity(undefined)

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data)
        setDetailedActivity(response.data[0])
      })
  }, [])

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ActivityList
        activities={activities}
        selectActivityDetailedView={selectActivityDetailedView}
      />
      <div className="w-1/2">
        {detailedActivity ? (
          <DetailedActivity
            detailedActivity={detailedActivity}
            toggleEditMode={toggleEditMode}
            inEditMode={inEditMode}
            closeActivityDetails={closeActivityDetails}
          />
        ) : null}
      </div>
    </div>
  )
}

export default ActivityDashboard
