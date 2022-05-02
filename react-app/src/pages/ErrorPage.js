import React from 'react'
import styles from '../css/ErrorPage.css'
import {NavLink} from 'react-router-dom'

function ErrorPage(props) {
  return (
    <div className="bodywithnav">
        <h1 className="errorh1">ERROR  <span className="errorspan1 errorcode">4</span><code className="errorcode">{"</>"}</code><span className="errorspan2">4</span></h1>
        <NavLink className="errora" to={props.role}>(╯°□°）╯︵ ┻━┻</NavLink>
    </div>
  )
}

export default ErrorPage