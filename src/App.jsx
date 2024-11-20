import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/log/:logId?" element={<LogDetailsPage />} />
          <Route path="/new-log" element={<NewLogPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
