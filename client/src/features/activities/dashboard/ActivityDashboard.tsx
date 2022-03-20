import {useEffect, useState} from "react"
import agent from "../../../app/api/agent"
import {Activity} from "../../../app/layout/models/activity"
import CirclesLoader from "../../../app/layout/shared/CirclesLoader"
import ConfirmModal from "../../../app/layout/shared/modals/ConfirmModal"
import DetailedActivity from "../details/DetailedActivity"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [detailedActivity, setDetailedActivity] = useState<Activity | undefined>()
  const [updatedActivityId, setUpdatedActivityId] = useState<string>()
  const [inEditMode, setInEditMode] = useState<boolean>(false)
  const [categories, setCategories] = useState<string[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    agent.Activities.list().then(response => {
      setActivities(response)
      setDetailedActivity(response[0])
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (activities !== undefined) {
      const uniqueCategories = Array.from(new Set(activities.map(a => a.category)))
      setCategories(uniqueCategories)
    }
  }, [activities])

  useEffect(() => {
    setDetailedActivity(activities.find(a => a.id === updatedActivityId))
  }, [updatedActivityId, activities])

  const toggleEditMode = () => setInEditMode(prev => !prev)

  const selectActivityDetailedView = (activity: Activity) => {
    setDetailedActivity(activity)
    setInEditMode(false)
  }

  const removeActivity = (id?: string) => {
    toggleEditMode()
    setActivities([...activities.filter(a => a.id !== detailedActivity?.id)])
    setDetailedActivity(undefined)
    setModalOpen(false)
  }

  const closeEditMode = (activity: Activity | undefined) => {
    if (activity !== undefined) {
      setActivities(activities => activities.map(a => (a.id === activity.id ? activity : a)))
      setUpdatedActivityId(activity.id)
    }
    toggleEditMode()
  }

  const closeViewMode = () => (inEditMode ? toggleEditMode() : setDetailedActivity(undefined))

  if (loading) return <CirclesLoader />

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ConfirmModal isOpen={modalOpen} handleClose={() => setModalOpen(false)} handleDelete={removeActivity} />
      <ActivityList activities={activities} selectActivityDetailedView={selectActivityDetailedView} />
      <div className="w-1/2">
        {detailedActivity ? (
          <DetailedActivity
            detailedActivity={detailedActivity}
            inEditMode={inEditMode}
            openConfirmModal={() => setModalOpen(true)}
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
