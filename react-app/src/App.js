import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
// import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";






/*Student*/ 
import Quizzes from "../src/pages/Student/Quizzes";
import Profile from "../src/pages/Student/Profile";
import ScoreHistory from "../src/pages/Student/ScoreHistory";


/*Teacher*/ 
import MyQuizzes from "../src/pages/Teacher/MyQuizzes";
import StudentsScores from "../src/pages/Teacher/StudentsScores";



/*Global*/ 
import ErrorPage from "../src/pages/ErrorPage";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

//STUDENT MONO PROS TO PARON
function App() {
  var user = 'student';
  if (user == 'student'){
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Quizzes />}></Route>
        <Route path="/student" element={<Quizzes />}></Route>
        <Route path="student/profile" element={<Profile />} />
        <Route path="student/history" element={<ScoreHistory />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}else if(user == 'teacher'){
    return (
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<MyQuizzes />}></Route>
          <Route path="/teacher" element={<MyQuizzes />}></Route>
          <Route path="teacher/profile" element={<Profile />} />
          <Route path="teacher/history" element={<ScoreHistory />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );

  }else{
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    );

  }
}

export default App;
