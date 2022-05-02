import React, { Component } from "react";
import MyQuizContainer from "../../components/MyQuizContainer";

export default function MyQuizzes() {
  return (
      <div className="bodywithnav">
        <div Style="height:170px;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <h1>My Quizzes</h1>
          <h3>Search for a quiz</h3>
          <input type="text" placeholder="search..." />
          {/* <button>Create a new Quiz</button> */}
        </div>

        <MyQuizContainer></MyQuizContainer>
      </div>
  );
}