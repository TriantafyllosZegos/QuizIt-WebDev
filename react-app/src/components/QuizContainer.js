import React, { Component } from 'react'
import QuizInfo from './QuizInfo'

export default class QuizContainer extends Component {
  render() {
    return (
      <div className="QuizContainer">
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
      </div>
    );
  }
}
