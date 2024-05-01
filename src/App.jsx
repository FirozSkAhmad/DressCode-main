import React, { useContext,useState } from "react";
import { useEffect } from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import sharedContext from "../src/context/SharedContext";
import Layout from "./Layout";
import BlogPost from "./pages/BlogPost";
import BlogPage from "./pages/BlogPage";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../src/firebase";

const App = () => {
  const { setBlogsData } = useContext(sharedContext);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "In The Blog");
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogsData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogpost" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
