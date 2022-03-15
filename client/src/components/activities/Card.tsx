const Card = ({activity}: any) => {
  return (
    <div className="flex flex-col shadow-lg rounded-md p-3 bg-gradient-to-r from-gray-50 to-slate-300">
      <h2 className="py-4 text-left ml-12 text-2xl font-semibold">
        {activity.title}
      </h2>
      <img
        src={`https://source.unsplash.com/random/${Math.ceil(
          Math.random() * 1000
        )}/?${activity.category}`}
        className="w-4/5 h-2/3 self-center max-h-64 object-cover rounded-lg shadow-xl"
        alt="activity"
      />
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="font-semibold ml-3">{activity.venue}</h3>
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="font-semibold ml-3">{activity.description}</h4>
        </div>
      </div>
    </div>
  )
}

export default Card
