import React, { Component } from "react";
import ph from "../assets/images/placeholder.png";

export default function HistoryItem(){
    return (
      <div className="QuizInfo">
        <div className="flex">
          <h2>Quiz name</h2>
          <img src={ph} />
          <h3>Teacher's name</h3>
          <span>Class name</span>
        </div>
        <h2><span className="score">19</span>/20</h2>
      </div>
    );
  }
