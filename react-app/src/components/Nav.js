import React, { Component } from 'react'
import {GrUser,GrHistory} from 'react-icons/gr'

export default function Nav(){
    return (
      <div className="nav">
        <h1 className="nav-icon">QuizIT</h1>
        <div className="nav-icon"><GrUser/></div>
        <div className="nav-icon"><GrHistory/></div>
      </div>
    );
  }
