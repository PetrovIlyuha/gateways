import {observer} from "mobx-react-lite"
import React from "react"
import {useStore} from "../../../app/stores/store"
import Card from "../components/Card"

const ActivityList = () => {
  const {activityStore} = useStore()
  return (
    <div className="flex flex-col w-1/2 gap-12 mb-10">
      {activityStore.activities?.map(activity => (
        <Card
          activity={activity}
          key={activity.id}
          setDetailedActivity={activityStore.selectActivityDetails}
        />
      ))}
    </div>
  )
}

export default observer(ActivityList)
