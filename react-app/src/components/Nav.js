import React, { Component } from 'react'
import {GrUser,GrHistory} from 'react-icons/gr'
import styles from '../css/components/Nav.module.css'
import {NavLink} from 'react-router-dom'
import logo from "../assets/icons/logobig.png";

export default function Nav(props){
    return (
      <div className={styles.nav}>
        <NavLink className={`${styles.navicon} ${styles.logo}`} to={props.role}><img src={logo} alt="logo" /></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/profile`}><GrUser/></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/history`}><GrHistory/></NavLink>
      </div>
    );
  }
