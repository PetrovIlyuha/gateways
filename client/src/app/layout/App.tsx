import {Switch, Route} from "react-router-dom"
import TopNavigation from "./shared/TopNavigation"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"
import Create from "../../features/activities/create/Create"
import DetailedActivity from "../../features/activities/details/DetailedActivity"

function App() {
  return (
    <div className="bg-gray-100">
      <TopNavigation />
      <div className="container mx-auto sm:px-6 lg:px-8 pt-14">
        <Switch>
          <Route path="/" exact component={ActivityDashboard} />
          <Route path="/create" component={Create} />
          <Route path="/activity/:id" component={DetailedActivity} />
        </Switch>
      </div>
    </div>
  )
}

export default App
