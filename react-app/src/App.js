import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
// import Layout from "./components/Layout";
import Nav from "./components/Nav";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";






/*Student*/ 
import Quizzes from "../src/pages/Student/Quizzes";
import Profile from "../src/pages/Student/Profile"; //used for both currently
import ScoreHistory from "../src/pages/Student/ScoreHistory";
import QuizPlay from "../src/pages/Student/QuizPlay";
import Score from "../src/pages/Student/Score";


/*Teacher*/ 
import MyQuizzes from "../src/pages/Teacher/MyQuizzes";
import StudentsScores from "../src/pages/Teacher/StudentsScores";
import CreateQuiz from "../src/pages/Teacher/CreateQuiz";
import EditQuiz from "../src/pages/Teacher/EditQuiz";



/*Global*/ 
import ErrorPage from "../src/pages/ErrorPage";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
var user = 'teacher';
//this routing is for testing purposes only
function App() {
  if (user == 'student'){
  return (
    <div className="App">
      <Nav role={user} ></Nav>
      
      <Routes>
        <Route path="/" element={<Quizzes />}></Route>
        <Route path="/student" element={<Quizzes />}></Route>
        <Route path="student/profile" element={<Profile />} />
        <Route path="student/history" element={<ScoreHistory />} />
        <Route path="student/play" element={<QuizPlay id={"12gj123v"}/>} />
        <Route path="student/score" element={<Score score={5} />} />
        <Route path="*" element={<ErrorPage role={user} />} />
      </Routes>
    </div>
  );
}else if(user == 'teacher'){
    return (
      <div className="App">
        <Nav role={user} ></Nav>
        <Routes>
          <Route path="/" element={<MyQuizzes />}></Route>
          <Route path="/teacher" element={<MyQuizzes />}></Route>
          <Route path="teacher/profile" element={<Profile />} />
          <Route path="teacher/:id/scores" element={<StudentsScores id={"12gj123v"} />} />
          <Route path="teacher/create" element={<CreateQuiz/>} />
          <Route path="teacher/:id/edit" element={<EditQuiz id={"12gj123v"} />} />
          <Route path="*" element={<ErrorPage role={user}/>} />
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
          <Route path="*" element={<ErrorPage role={user}/>} />
        </Routes>
      </div>
    );

  }
}

export default App;
