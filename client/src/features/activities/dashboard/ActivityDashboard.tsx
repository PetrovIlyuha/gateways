import axios from "axios"
import React, {useEffect, useState} from "react"
import {Activity} from "../../../app/layout/models/activity"
import ActivityList from "./ActivityList"

const ActivityDashboard = () => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [detailedActivity, setDetailedActivity] = useState<Activity>()
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
      <ActivityList
        activities={activities}
        setDetailedActivity={setDetailedActivity}
      />
      <div className="w-1/2">
        {detailedActivity ? (
          <div className="ml-8" style={{marginTop: scrollTop}}>
            <div className="flex flex-col">
              <h2 className="font-medium text-gray-500">Event Details &gt;</h2>
              <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
                {detailedActivity?.title}
              </p>
              <img
                src={`/assets/categoryImages/${detailedActivity?.category}.jpg`}
                alt="selectedActivity details"
                className="object-center object-cover my-3 h-96"
              />
              <div className="flex justify-around gap-2">
                <button className="py-3 px-6 bg-gradient-to-br from-blue-400 to-blue-800 w-1/2 rounded-md shadow-sm text-white font-semibold text-2xl">
                  Edit
                </button>
                <button className="py-3 px-6 bg-gradient-to-br from-red-500 to-red-800 w-1/2 rounded-md shadow-sm text-white font-semibold text-2xl">
                  Cancel
                </button>
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-5 mt-3">
                <div className="flex flex-col justify-between h-20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h2 className="leading-3">Date:</h2>
                  <h2 className="font-semibold text-xl">
                    {new Date(detailedActivity?.date).toDateString()}
                  </h2>
                </div>
                <div className="flex flex-col justify-between h-20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <h3 className="leading-4">Location:</h3>
                  <h2 className="font-semibold text-xl">
                    {detailedActivity.city} {detailedActivity.venue}
                  </h2>
                </div>
                <div className="flex flex-col justify-between h-20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <h2 className="leading-3">Category:</h2>
                  <h2 className="font-semibold text-xl">
                    {detailedActivity.category}
                  </h2>
                </div>
                <div className="flex flex-col justify-between h-20">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h2 className="leading-3">Description:</h2>
                  <h2 className="font-semibold text-xl">
                    {detailedActivity.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ActivityDashboard
