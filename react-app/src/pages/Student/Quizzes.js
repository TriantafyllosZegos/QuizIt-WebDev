import React, { Component } from "react";
import QuizContainer from "../../components/QuizContainer";

export default function Quizzes() {
  return (
      <div className="bodywithnav">
        <div Style="height:150px">
          <br />
          <h3>Search for a quiz</h3>
          <br />
          <input type="text" placeholder="search..." />
          <br />
        </div>

        <QuizContainer></QuizContainer>
      </div>
  );
}
