import React, { Component } from "react";
import QuizContainer from './QuizContainer'

export default function Body(){
    return (
      <div className="bodywithnav">
        
        <div>
          <br />
          <h3>Search for a quiz</h3>
          <br />
          <input type="text" placeholder="search..." />
        </div>

        <QuizContainer></QuizContainer>
      </div>
    );
  }
