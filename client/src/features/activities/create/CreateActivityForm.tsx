import {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import {toast} from "react-toastify"
import {v4 as uuidv4} from "uuid"
import {motion} from "framer-motion"
import {Activity} from "../../../app/layout/models/activity"

import {ImSpinner9} from "react-icons/im"
import {observer} from "mobx-react-lite"
import {useStore} from "../../../app/stores/store"

const CreateActivityForm = () => {
  const history = useHistory()
  const {
    activityStore: {submitting, categories, createActivity},
  } = useStore()
  const initialFormState: Activity = {
    id: uuidv4(),
    title: "",
    description: "",
    category: "culture-festival",
    date: "",
    city: "",
    venue: "",
  }

  const [activity, setActivity] = useState(initialFormState)

  const updateActivity = (e: any) => {
    setActivity(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const createActivityCommand = async (e: any) => {
    e.preventDefault()
    await createActivity(activity)
    toast.success("Activity was Created! ⭐")
    setTimeout(() => {
      history.push("/")
    }, 800)
  }

  return (
    <motion.div
      initial={{y: 100}}
      animate={{y: 0, transition: {duration: 0.4}}}
      className="min-h-screen container mx-auto w-1/2 flex flex-col justify-center"
    >
      <form className="space-y-8">
        <div className="space-y-8">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Create Event</h3>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={activity.title}
                  onChange={updateActivity}
                  id="title"
                  className="flex-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 rounded-md sm:text-sm border-gray-300"
                />
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="ab1out" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    value={activity.description}
                    onChange={updateActivity}
                    rows={3}
                    className="shadow-sm px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Write a few words about this event (activity).
                </p>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={activity.city}
                  onChange={updateActivity}
                  id="title"
                  className="flex-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 rounded-md sm:text-sm border-gray-300"
                />
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={activity.venue}
                  onChange={updateActivity}
                  id="title"
                  className="flex-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 rounded-md sm:text-sm border-gray-300"
                />
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  onChange={updateActivity}
                  className="flex-1 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 rounded-md sm:text-sm border-gray-300"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={activity.date}
                  onChange={updateActivity}
                  id="date"
                  className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 pl-2 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="pt-2">
          <div className="flex justify-end">
            <Link to="/">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>
            <button
              onClick={createActivityCommand}
              type="submit"
              className="relative ml-3 inline-flex justify-center py-2 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {submitting && (
                <ImSpinner9 className="animate-spin text-white absolute top-3 left-3" />
              )}
              Save
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default observer(CreateActivityForm)
