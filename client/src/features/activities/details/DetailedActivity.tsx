import axios from "axios"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {Activity} from "../../../app/layout/models/activity"

const DetailedActivity = () => {
  const [activity, setActivity] = useState<Activity>()

  const params = useParams<any>()

  useEffect(() => {
    axios
      .get<Activity>(`http://localhost:5000/api/activities/${params?.id}`)
      .then(response => {
        setActivity(response.data)
      })
  }, [params])

  return activity ? (
    <div>
      <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
        <img
          src={`/assets/categoryImages/${activity?.category}.jpg`}
          alt="selectedActivity details"
          className="h-1/3 w-full object-center object-cover lg:h-1/2 lg:w-full mt-24"
        />
      </div>

      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:col-start-2">
          <h2 id="features-heading" className="font-medium text-gray-500">
            Event Details &gt;
          </h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
            {activity?.title}
          </p>
          <p className="mt-4 text-gray-500">
            Current Activity Information is displayed and is always up-to-date
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
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
                {new Date(activity?.date).toDateString()}
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
                {activity.city} {activity.venue}
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
              <h2 className="font-semibold text-xl">{activity.category}</h2>
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
              <h2 className="font-semibold text-xl">{activity.description}</h2>
            </div>
          </dl>
        </div>
      </div>
    </div>
  ) : null
}

export default DetailedActivity
