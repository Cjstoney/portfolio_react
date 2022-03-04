import React, { useState, useEffect } from "react";
import Home from "./pages/home/home";
import Construction from "./pages/construction/construction";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return <div>{width > 870 ? <Home /> : <Construction />}</div>;
};

export default App;
