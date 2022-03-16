import axios from "axios"
import {useEffect, useState} from "react"
import TopNavigation from "./shared/TopNavigation"
import Card from "../../components/activities/Card"
import {Activity} from "./models/activity"

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then(response => {
        setActivities(response.data)
      })
  }, [])

  return (
    <div className="bg-gray-100">
      <TopNavigation />
      <div className="container mx-auto sm:px-6 lg:px-8 ">
        <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
          <div className="flex flex-col w-1/2 gap-12 mb-10">
            {activities?.map(activity => (
              <Card activity={activity} key={activity.id} />
            ))}
          </div>
          <div className="other w-1/2">Other Data Block</div>
        </div>
      </div>
    </div>
  )
}

export default App
