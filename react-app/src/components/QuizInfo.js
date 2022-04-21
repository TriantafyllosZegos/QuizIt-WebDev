import React, { Component } from "react";
import ph from "../assets/images/placeholder.png";

export default function QuizInfo(){
    return (
      <div className="QuizInfo">
        <div className="flex">
          <h2>Quiz name</h2>
          <img src={ph} />
          <h3>Teacher's name</h3>
          <span>Class name</span>
        </div>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab
          voluptatem, non aliquam nemo labore magni aut omnis eum? Numquam velit
          tenetur quo provident natus fugit, voluptas deserunt ad voluptates?
        </span>
        <button>Start Quiz</button>
      </div>
    );
  }
