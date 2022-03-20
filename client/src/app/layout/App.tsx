import {Switch, Route} from "react-router-dom"
import {useState, useEffect} from "react"
import {motion} from "framer-motion"
import TopNavigation from "./shared/TopNavigation"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import DetailedActivity from "../../features/activities/details/DetailedActivity"
import CreateActivityForm from "../../features/activities/create/CreateActivityForm"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"

function App() {
  const [showIntro, setShowIntro] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 2200)
  }, [])

  return (
    <div className="bg-gray-100">
      {showIntro ? (
        <div className="w-full h-screen flex items-center justify-center">
          <video
            src={`/assets/intro.mp4`}
            className="w-screen min-h-screen object-cover relative"
            autoPlay
            loop
            muted
          />
          <motion.h2
            initial={{scale: 0, opacity: 0.2}}
            animate={{scale: 1.5, opacity: 1, transition: {duration: 1}}}
            className="absolute top-2/4 left-1/5 origin-center text-white text-5xl animate-pulse"
          >
            Welcome to GateWays!
          </motion.h2>
        </div>
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
