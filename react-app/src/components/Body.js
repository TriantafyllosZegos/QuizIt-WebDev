import React, { Component } from "react";
import QuizContainer from './QuizContainer'

export default class Body extends Component {
  render() {
    return (
      <div className="bodywithnav">
        
        <div>
          <h3>Search for</h3>
          <input type="text" placeholder="search..." />
        </div>

        <QuizContainer></QuizContainer>
      </div>
    );
  }
}
