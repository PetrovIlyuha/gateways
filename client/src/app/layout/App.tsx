import {Switch, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import {motion} from "framer-motion"
import TopNavigation from "./shared/TopNavigation"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import DetailedActivity from "../../features/activities/details/DetailedActivity"
import CreateActivityForm from "../../features/activities/create/CreateActivityForm"
import VideoLoaderOnLoad from "./shared/VideoLoaderOnLoad"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [showIntro, setShowIntro] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 2200)
  }, [])

  return (
    <div className="bg-gray-100">
      {showIntro ? (
        <VideoLoaderOnLoad />
      ) : (
        <motion.div
          initial={{y: 200, opacity: 0}}
          animate={{
            y: 0,
            opacity: 1,
            transition: {duration: 1.2, ease: "backIn"},
          }}
        >
          <TopNavigation />
          <div className="container mx-auto sm:px-6 lg:px-8 pt-14">
            <Switch>
              <Route path="/" exact component={ActivityDashboard} />
              <Route path="/create" component={CreateActivityForm} />
              <Route path="/activity/:id" component={DetailedActivity} />
            </Switch>
          </div>
          <ToastContainer />
        </motion.div>
      )}
    </div>
  )
}

export default App
