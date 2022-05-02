import React, { Component } from "react";
import ph from "../assets/images/placeholder.png";

export default function TeacherQuiz(){
    return (
      <div className="QuizInfo">
        <div className="flex">
          <h2>Quiz name</h2>
          <img src={ph} />
          <h3>Class name</h3>
        </div>

        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab
          voluptatem, non aliquam nemo labore magni aut omnis eum? Numquam velit
          tenetur quo provident natus fugit, voluptas deserunt ad voluptates?
        </span>
        <div Style="display:flex;flex-direction:row;">
        <button>Edit</button>
        <button>Scores</button>
        </div>
      </div>
    );
  }
