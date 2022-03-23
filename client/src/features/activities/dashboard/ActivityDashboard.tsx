import {useEffect} from "react"
import {observer} from "mobx-react-lite"
import CirclesLoader from "../../../app/layout/shared/loaders/CirclesLoader"
import ConfirmModal from "../../../app/layout/shared/modals/ConfirmModal"
import {useStore} from "../../../app/stores/store"
import DetailedActivity from "../details/DetailedActivity"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  const {
    activityStore: {loadActivities, loading, detailedActivity},
  } = useStore()

  useEffect(() => {
    loadActivities()
  }, [loadActivities])

  if (loading) return <CirclesLoader />

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ConfirmModal />
      <ActivityList />
      {detailedActivity && <DetailedActivity />}
    </div>
  )
}

export default observer(ActivityDashboard)
