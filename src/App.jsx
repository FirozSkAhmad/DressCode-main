import React from "react";
import { useEffect } from "react";
import Home from "./components/home/Home";

const App = () => {
  useEffect(() => {
    let registration;

    if ("serviceWorker" in navigator) {
      const onLoad = () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((reg) => {
            registration = reg;
            console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      };

      window.addEventListener("load", onLoad);

      return () => {
        // Cleanup function: Remove event listener and unregister service worker
        window.removeEventListener("load", onLoad);
        if (registration) {
          registration.unregister().then(() => {
            console.log("Service Worker unregistered:", registration);
          });
        }
      };
    }
  }, []);

  return (
    <>
      <Home></Home>
    </>
  );
};

export default App;
