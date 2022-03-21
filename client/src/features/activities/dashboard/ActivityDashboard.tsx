import {useEffect, useState} from "react"
import {toast} from "react-toastify"
import {observer} from "mobx-react-lite"
import agent from "../../../app/api/agent"
import {Activity} from "../../../app/layout/models/activity"
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
      <div className="w-1/2">{detailedActivity ? <DetailedActivity /> : null}</div>
    </div>
  )
}

export default observer(ActivityDashboard)
