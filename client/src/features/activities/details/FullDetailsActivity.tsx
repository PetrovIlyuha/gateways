import React, {useEffect, useState} from "react"
import {motion} from "framer-motion"
import useScroll from "../../../hooks/useScroll"

//icons
import {MdOutlineShareLocation, MdOutlineDescription} from "react-icons/md"
import {BsCalendar2Check} from "react-icons/bs"
import {BiCategoryAlt} from "react-icons/bi"
import {ImSpinner9} from "react-icons/im"
import {observer} from "mobx-react-lite"
import {useStore} from "../../../app/stores/store"
import {MODAL_TYPES} from "../../../app/stores/ModalStore"
import {useHistory} from "react-router-dom"

const FullDetailsActivity = () => {
  const history = useHistory()
  const {
    activityStore: {
      detailedActivity,
      closeViewMode,
      closeEditMode,
      categories,
      inEditMode,
      submitting,
    },
    modalStore: {toggleModal},
  } = useStore()

  const {scrollTop} = useScroll()
  const initialFormState = detailedActivity ?? {
    id: "",
    title: "",
    description: "",
    category: "",
    date: "",
    city: "",
    venue: "",
  }

  const [activity, setActivity] = useState(initialFormState)

  useEffect(() => {
    if (detailedActivity) setActivity(detailedActivity)
  }, [detailedActivity])

  const updateActivity = (e: any) => {
    setActivity(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const saveAndCloseView = async () =>
    inEditMode ? await closeEditMode(activity) : await closeEditMode(undefined)

  const closeViewModeWithRedirect = () => {
    inEditMode ? closeViewMode() : history.push("/")
  }

  return (
    <div className="w-full mt-12 h-screen">
      <div className="ml-8" style={{marginTop: scrollTop}}>
        <div className="flex flex-col">
          <h2 className="font-medium text-gray-500">Event Details &gt;</h2>
          {inEditMode ? (
            <input
              className="py-2 text-2xl font-extrabold text-gray-900 rounded-md pl-2"
              type="text"
              value={activity.title}
              name="title"
              onChange={updateActivity}
            />
          ) : (
            <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
              {detailedActivity?.title}
            </p>
          )}

          <motion.img
            initial={{scale: 0.4}}
            animate={{scale: 1, transition: {duration: 0.4}}}
            src={`/assets/categoryImages/${detailedActivity?.category}.jpg`}
            alt="selectedActivity details"
            className="object-center object-cover my-3 h-96"
          />
          <div className="flex justify-around gap-2">
            <button
              onClick={saveAndCloseView}
              className="py-3 px-6 relative bg-gradient-to-br from-blue-400 to-blue-800 w-1/2 rounded-md shadow-sm text-white font-semibold text-2xl"
            >
              {submitting && <ImSpinner9 className="animate-spin text-white absolute top-4" />}
              {inEditMode ? "Save" : "Edit"}
            </button>
            <button
              onClick={closeViewModeWithRedirect}
              className="py-3 px-6 bg-gradient-to-br from-red-500 to-red-800 w-1/2 rounded-md shadow-sm text-white font-semibold text-2xl"
            >
              {inEditMode ? "Cancel" : "Close View"}
            </button>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-5 mt-3">
            <div className="flex flex-col justify-between h-20">
              <BsCalendar2Check />
              <motion.h2
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.4}}}
                className="leading-3"
              >
                Date:
              </motion.h2>
              {inEditMode ? (
                <motion.input
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  name="date"
                  value={new Date(activity.date).toISOString().substring(0, 10)}
                  onChange={updateActivity}
                  type="date"
                  className="px-2 rounded-md"
                />
              ) : (
                <motion.h2
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  className="font-semibold text-xl"
                >
                  {detailedActivity && new Date(detailedActivity.date).toDateString()}
                </motion.h2>
              )}
            </div>
            <div className="flex flex-col justify-between h-20">
              <MdOutlineShareLocation />
              {!inEditMode && (
                <motion.h3
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  className="leading-4"
                >
                  Location:
                </motion.h3>
              )}
              {inEditMode ? (
                <div className="flex flex-col gap-1">
                  <motion.input
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 0.4}}}
                    type="text"
                    name="city"
                    value={activity.city}
                    onChange={updateActivity}
                    className="px-2 rounded-md"
                    placeholder="City"
                  />
                  <motion.input
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 0.4}}}
                    type="text"
                    name="venue"
                    value={activity.venue}
                    onChange={updateActivity}
                    className="px-2 rounded-md"
                    placeholder="Venue"
                  />
                </div>
              ) : (
                <motion.h2
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  className="font-semibold text-xl"
                >
                  {detailedActivity?.city} {detailedActivity?.venue}
                </motion.h2>
              )}
            </div>
            <div className="flex flex-col justify-between h-20">
              <BiCategoryAlt />
              <motion.h2
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.4}}}
                className="leading-3"
              >
                Category:
              </motion.h2>
              {inEditMode ? (
                <motion.select name="category" onChange={updateActivity}>
                  {categories?.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </motion.select>
              ) : (
                <motion.h2
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  className="font-semibold text-xl"
                >
                  {detailedActivity?.category}
                </motion.h2>
              )}
            </div>
            <div className="flex flex-col justify-between h-20">
              <MdOutlineDescription />
              {!inEditMode && <h2 className="leading-3">Description:</h2>}
              {inEditMode ? (
                <motion.textarea
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  rows={2}
                  className="px-1 rounded-md"
                  placeholder="Description"
                  name="description"
                  value={activity.description}
                  onChange={updateActivity}
                ></motion.textarea>
              ) : (
                <motion.h2
                  initial={{opacity: 0}}
                  animate={{opacity: 1, transition: {duration: 0.4}}}
                  className="font-semibold text-xl"
                >
                  {detailedActivity?.description}
                </motion.h2>
              )}
            </div>
            {inEditMode && (
              <motion.button
                initial={{opacity: 0.2, x: -20}}
                animate={{opacity: 1, x: 0, transition: {duration: 0.3}}}
                onClick={() => toggleModal(MODAL_TYPES.CONFIRM_DELETE_ACTIVITY)}
                className="py-3 px-2 bg-gradient-to-br from-blue-400 to-blue-800 w-full rounded-md shadow-sm text-white font-semibold text-2xl col-span-1 col-start-2"
              >
                Delete Activity
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(FullDetailsActivity)
