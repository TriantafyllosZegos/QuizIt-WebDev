import React, { Component } from 'react'
import QuizInfo from './QuizInfo'

export default function QuizContainer (){
    return (
      <div className="QuizContainer">
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
        <QuizInfo></QuizInfo>
      </div>
    );
  }