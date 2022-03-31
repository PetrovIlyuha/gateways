import React, {useState} from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import useScroll from "../../../../hooks/useScroll"

const ActivityFilters = () => {
  const {scrollTop} = useScroll()
  const [date, setDate] = useState(new Date())
  // console.log(date)

  return (
    <div className="w-1/2" style={{marginTop: scrollTop}}>
      <div className="flex flex-col ml-12">
        {/* <h2 className="text-2xl font-semibold">Explore All Events</h2>
        <img
          src="./assets/artwork_words.png"
          className="w-full rounded-2xl shadow-sm mt-3 opacity-60"
          alt=""
        /> */}
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  )
}

export default ActivityFilters
