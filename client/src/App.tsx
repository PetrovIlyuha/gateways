import axios from "axios";
import { useEffect, useState } from "react";
import TopNavigation from "./components/shared/TopNavigation";
import Card from "./components/activities/Card";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <div className="sm:w-4xl max-w-7xl md:max-w-5xl m-auto flex mt-12 gap-3">
        <div className="flex flex-col w-1/2 gap-12 mb-10">
          {activities?.map((activity: any) => (
            <Card activity={activity} key={activity.id} />
          ))}
        </div>
        <div className="other w-1/2">Other Data Block</div>
      </div>
    </>
  );
}

export default App;
