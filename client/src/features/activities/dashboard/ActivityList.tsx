import {observer} from "mobx-react-lite"
import {useStore} from "../../../app/stores/store"
import Card from "../components/Card"

const ActivityList = () => {
  const {
    activityStore: {activitiesByDate},
  } = useStore()
  console.log(activitiesByDate)

  return (
    <div className="flex flex-col w-1/2 gap-12 mb-4">
      {Object.entries(activitiesByDate)?.map(([date, activities]) => (
        <div key={date} className="flex flex-col gap-12">
          <h2 className="text-xl font-semibold -mb-7">{new Date(date).toDateString()}</h2>
          {activities.map(activity => (
            <Card activity={activity} key={activity.id} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default observer(ActivityList)
