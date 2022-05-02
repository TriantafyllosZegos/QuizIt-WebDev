import React from "react";
import logo from "../assets/icons/logobig.png";
import styles from "../css/Signup.module.css";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className={styles.bodynonav}>
      <div className={styles.container}>
        <div>
          <img src={logo} className={styles.img} alt="logo" />
        </div>
        <div>
          <form className={styles.form} action="">
            <label className={styles.label} htmlFor="email">
              Username
            </label>
            <input className={styles.input} type="text" required />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input className={styles.input} type="email" required />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input className={styles.input} type="password" required />
            <label className={styles.label} htmlFor="">
              I will use the platform as a...
            </label>
            <div className={styles.radiocont}>
              <div className={styles.radioitem}>
                <input type="radio" id="student" name="role" value="student" />
                <label htmlfor="student">Student</label>
              </div>
              <div className={styles.radioitem}>
                <input type="radio" id="teacher" name="role" value="teacher" />
                <label htmlfor="teacher">Teacher</label>
              </div>
            </div>
            <button className={styles.button}>Sign up</button>
            <NavLink className={styles.a} to="/Login">
              Log in instead...
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
