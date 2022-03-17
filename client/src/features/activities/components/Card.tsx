import {Link} from "react-router-dom"

const Card = ({activity, setDetailedActivity}: any) => {
  return (
    <div className="flex flex-col shadow-inner border-2 border-slate-300 rounded-md  bg-gradient-to-r from-gray-50 to-slate-300">
      <h2 className="py-4 text-left ml-12 text-2xl font-semibold">
        {activity.title}
      </h2>
      <img
        src={`/assets/categoryImages/${activity.category}.jpg`}
        className="w-full sm:h-1/2 md:h-2/3 self-center max-h-64 object-cover"
        alt="activity"
      />
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 px-14 py-3">
          <div className="flex">
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
            <h3 className="font-semibold ml-3">
              {new Date(activity.date).toLocaleDateString()}
            </h3>
          </div>
          <div className="flex">
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
            <h3 className="font-semibold ml-3">
              <span className="text-blue-800">{activity.city}</span>{" "}
              {activity.venue}
            </h3>
          </div>
          <div className="flex">
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
            <h4 className="font-semibold ml-3">{activity.category}</h4>
          </div>
          <div className="flex">
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
            <h4 className="font-semibold ml-3">{activity.description}</h4>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          {/* <Link to={`/activity/${activity.id}`}> */}
          <button
            className="px-10 py-2 bg-cyan-600 text-white font-semibold text-xl m-4 rounded-md shadow-lg"
            onClick={() => setDetailedActivity(activity)}
          >
            View
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Card
