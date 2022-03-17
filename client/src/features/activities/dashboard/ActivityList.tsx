import React from "react"
import {Activity} from "../../../app/layout/models/activity"
import Card from "../components/Card"

interface ListProps {
  activities: Activity[]
  setDetailedActivity: (activity: Activity) => void
}

const ActivityList: React.FC<ListProps> = ({
  activities,
  setDetailedActivity,
}) => {
  return (
    <div className="flex flex-col w-1/2 gap-12 mb-10">
      {activities?.map(activity => (
        <Card
          activity={activity}
          key={activity.id}
          setDetailedActivity={setDetailedActivity}
        />
      ))}
    </div>
  )
}

export default ActivityList
