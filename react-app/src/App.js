import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
// import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quizzes from "../src/pages/Student/Quizzes";
import Profile from "../src/pages/Student/Profile";
import ScoreHistory from "../src/pages/Student/ScoreHistory";
import ErrorPage from "../src/pages/ErrorPage";

//STUDENT MONO PROS TO PARON
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* <Body></Body> */}
      <Routes>
        <Route path="student" element={<Quizzes />}></Route>
        <Route path="student/profile" element={<Profile />} />
        <Route path="student/history" element={<ScoreHistory />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
