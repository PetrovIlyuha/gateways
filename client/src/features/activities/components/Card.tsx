import {MdOutlineShareLocation, MdOutlineDescription} from "react-icons/md"
import {VscUnfold} from "react-icons/vsc"
import {SiRevealdotjs} from "react-icons/si"
import {BsCalendar2Check} from "react-icons/bs"
import {BiCategoryAlt} from "react-icons/bi"
import {useStore} from "../../../app/stores/store"
import {Link} from "react-router-dom"

const Card = ({activity}: any) => {
  const {
    activityStore: {selectActivityDetails},
  } = useStore()
  return (
    <div className="flex group flex-col rounded-md  bg-gradient-to-r from-gray-50 to-slate-300 shadow-md">
      <h2 className="py-4 text-left ml-5 text-xl font-bold">{activity.title}</h2>
      <div className="overflow-hidden sm:h-1/2 md:h-2/3">
        <img
          src={`/assets/categoryImages/${activity.category}.jpg`}
          className="w-full transition-all duration-300 self-center max-h-64 object-cover group-hover:scale-105"
          alt="activity"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-3 px-3 py-3">
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
        <div className="flex items-end">
          <button
            className="h-14 flex justify-center items-center px-3 py-2 bg-gradient-to-br from-cyan-300 to-cyan-600 text-white font-semibold text-md m-2 rounded-md shadow-inner"
            onClick={() => selectActivityDetails(activity)}
          >
            <VscUnfold size={32} /> Quick View
          </button>

          <Link to={`/activity/${activity.id}`}>
            <button
              className="h-14 flex justify-center items-center px-3 py-2 bg-gradient-to-br from-blue-400 to-blue-800 text-white font-semibold text-md m-2 rounded-md shadow-inner"
              onClick={() => selectActivityDetails(activity)}
            >
              <SiRevealdotjs size={32} />
              Detailed View
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
