import {MdOutlineShareLocation, MdOutlineDescription} from "react-icons/md"
import {BsCalendar2Check} from "react-icons/bs"
import {BiCategoryAlt} from "react-icons/bi"

const Card = ({activity, setDetailedActivity}: any) => {
  return (
    <div className="flex group flex-col shadow-inner border-2 border-slate-300 rounded-md  bg-gradient-to-r from-gray-50 to-slate-300">
      <h2 className="py-4 text-left ml-12 text-2xl font-semibold">{activity.title}</h2>
      <div className="overflow-hidden sm:h-1/2 md:h-2/3">
        <img
          src={`/assets/categoryImages/${activity.category}.jpg`}
          className="w-full transition-all duration-300 self-center max-h-64 object-cover group-hover:scale-105"
          alt="activity"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 px-14 py-3">
          <div className="flex items-center">
            <BsCalendar2Check />
            <h3 className="font-semibold ml-3">{new Date(activity.date).toLocaleDateString()}</h3>
          </div>
          <div className="flex items-center">
            <MdOutlineShareLocation />
            <h3 className="font-semibold ml-3">
              <span className="text-blue-800">{activity.city}</span> {activity.venue}
            </h3>
          </div>
          <div className="flex items-center">
            <BiCategoryAlt />
            <h4 className="font-semibold ml-3">{activity.category}</h4>
          </div>
          <div className="flex items-center">
            <MdOutlineDescription />
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
