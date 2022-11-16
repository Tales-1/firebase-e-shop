import { BrowserRouter as Router } from "react-router-dom"
import React, { useEffect } from "react"
import AnimatedRoutes from "components/AnimatedRoutes";
// UTLS & MISC
import Notification from "./components/Notification";
import ScreenOverlay from "./utils/screenOverlay";
import useFetcher from "./utils/hooks/useFetcher";
import useStoreUser from "./utils/hooks/useStoreUser";
import Welcome from "pages/WelcomePg";
import { selectLoading } from "redux/features/screenSlice";
import { useAppSelector } from "redux/store/hooks";
import timeLeft from "utils/timeLeft";

const App: React.FC = () => {
  const {status, fetch, dispatch} = useFetcher()
  const {isLoggedIn} = useStoreUser()
  const isVisible = useAppSelector(selectLoading)
  
  useEffect(()=>{
    if(status === "loading"){
      if(timeLeft() < 1000){
        fetch()
      }
    }
  },[status,dispatch])
  

  return (
    <div className="relative flex flex-col h-fit">
      <Welcome isVisible={isVisible}/>
      <Notification />
      <ScreenOverlay />
        <Router>
          <AnimatedRoutes isLoggedIn={isLoggedIn} />
        </Router>
      
    </div>
  );
}

export default App;
