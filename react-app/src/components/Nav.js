import React, { Component } from 'react'
import {GrUser,GrHistory,GrFormAdd} from 'react-icons/gr'
import styles from '../css/components/Nav.module.css'
import {NavLink} from 'react-router-dom'
import logo from "../assets/icons/logobig.png";

export default function Nav(props){
  if(props.role == "student"){
    return (
      <div className={styles.nav}>
        <NavLink className={`${styles.navicon} ${styles.logo}`} to={props.role}><img src={logo} alt="logo" /></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/profile`}><GrUser/></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/history`}><GrHistory/></NavLink>
      </div>
    );

  }else{
    return (
      <div className={styles.nav}>
        <NavLink className={`${styles.navicon} ${styles.logo}`} to={props.role}><img src={logo} alt="logo" /></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/profile`}><GrUser/></NavLink>
        <NavLink className={styles.navicon} to={`${props.role}/create`}><GrFormAdd/></NavLink>
      </div>
    );}
  }
