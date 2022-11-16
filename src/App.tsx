import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"
import React, { useEffect, useLayoutEffect } from "react"
import AnimatedRoutes from "components/AnimatedRoutes";
// UTLS & MISC
import Notification from "./components/misc/Notification";
import Overlay from "./utils/Overlay";
import useFetcher from "./utils/hooks/useFetcher";
import useStoreUser from "./utils/hooks/useStoreUser";
import Welcome from "pages/Welcome_PG";
import { selectLoading } from "redux/features/screenSlice";
import { useAppSelector } from "redux/store/hooks";

const App: React.FC = () => {
  const {status, fetch, dispatch} = useFetcher()
  const {isLoggedIn} = useStoreUser()
  const isVisible = useAppSelector(selectLoading)

  useEffect(()=>{
    if(status === "loading"){
      fetch()
      console.log(("fetched"))
    }
  },[status,dispatch])
  

  return (
    <div className="relative flex flex-col h-fit">
      <Welcome isVisible={isVisible}/>
      <Notification />
      <Overlay />
        <Router>
          <AnimatedRoutes isLoggedIn={isLoggedIn} />

        </Router>
      
    </div>
  );
}

export default App;
