import React, { Component } from 'react'
import {GrUser,GrHistory} from 'react-icons/gr'
import styles from '../css/components/Nav.module.css'
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return (
      <div className={styles.nav}>
        <NavLink className={styles.navicon} to="student">QuizIT</NavLink>
        <NavLink className={styles.navicon} to="student/profile"><GrUser/></NavLink>
        <NavLink className={styles.navicon} to="student/history"><GrHistory/></NavLink>
      </div>
    );
  }
