import {useEffect} from "react"
import {observer} from "mobx-react-lite"
import CirclesLoader from "../../../app/layout/shared/loaders/CirclesLoader"
import {useStore} from "../../../app/stores/store"
import ActivityList from "./ActivityList"
import SideDetailedActivity from "../details/SideDetailedActivity"
import ArtWork from "../../../app/layout/shared/fillers/ArtWork"

const ActivityDashboard = () => {
  const {
    activityStore: {loadActivities, loading, detailedActivity},
  } = useStore()

  useEffect(() => {
    loadActivities()
  }, [loadActivities])

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [])

  if (loading) return <CirclesLoader />

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ActivityList />
      {detailedActivity ? <SideDetailedActivity /> : <ArtWork />}
    </div>
  )
}

export default observer(ActivityDashboard)
