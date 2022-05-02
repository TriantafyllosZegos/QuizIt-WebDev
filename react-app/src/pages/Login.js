import React from 'react'
import logo from '../assets/icons/logobig.png'
import styles from '../css/Login.module.css'
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.bodynonav}>
      <div className={styles.container}>
        <div>
          <img src={logo} className={styles.img} alt="logo" />
        </div>
        <div>
          <form className={styles.form} action="">
            <label className={styles.label} htmlFor="email">Email</label>
            <input className={styles.input} type="email" required />
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" required />
            <button className={styles.button}>Log in</button>
            <NavLink className={styles.a} to="/Signup">Sign up instead...</NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login