import React, { Component } from 'react'
import {GrUser,GrHistory} from 'react-icons/gr'

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-icon"><GrUser/></div>
        <div className="nav-icon"><GrHistory/></div>
      </div>
    );
  }
}
