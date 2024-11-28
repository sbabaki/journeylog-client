import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/homepage";
import NewLogPage from "./pages/NewLogPage/NewLogPage";
import LogDetailsPage from "./pages/LogDetailsPage/logdetailspage";
import JourneyMapPage from "./pages/JourneyMapPage/JourneyMapPage";

function App() {



  
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/your-log" element={<LogDetailsPage />} />
          <Route path="/your-log/:logId" element={<LogDetailsPage />} />
          <Route path="/new-log" element={<NewLogPage />} />
          <Route path="/journey-map" element={<JourneyMapPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
