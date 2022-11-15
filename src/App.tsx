import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import AnimatedRoutes from "components/AnimatedRoutes";
// UTLS & MISC
import Notification from "./components/misc/Notification";
import Overlay from "./utils/Overlay";
import useFetcher from "./utils/hooks/useFetcher";
import useStoreUser from "./utils/hooks/useStoreUser";
import { AnimatePresence } from "framer-motion";
import Welcome from "pages/Welcome_PG";

const App: React.FC = () => {
  const {status, fetch, dispatch} = useFetcher()
  const {isLoggedIn} = useStoreUser()
  const [isVisible,setVisible] = useState(true)
  useEffect(()=>{
    if(status === "loading"){
      fetch()
    }
    setTimeout(()=>setVisible(false),1500)
  },[status,dispatch])

 
  return (
    <div className="relative flex flex-col h-fit">
      
    <Welcome isVisible={isVisible}/>
    
      <Notification />
      <Overlay />
      <AnimatePresence exitBeforeEnter>
        <Router>
          <AnimatedRoutes isLoggedIn={isLoggedIn} />

        </Router>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
