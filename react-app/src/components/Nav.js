import React, { Component } from 'react'
import {GrUser,GrHistory} from 'react-icons/gr'
import styles from '../css/components/Nav.module.css'

export default function Nav(){
    return (
      <div className={styles.nav}>
        <h1 className={styles.navicon}>QuizIT</h1>
        <div className={styles.navicon}><GrUser/></div>
        <div className={styles.navicon}><GrHistory/></div>
      </div>
    );
  }
