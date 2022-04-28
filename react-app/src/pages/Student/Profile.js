import React from "react";
import styles from '../../css/Profile.module.css'
import ph from "../../assets/images/placeholder.png";

import {GrUser,GrHistory} from 'react-icons/gr'

function Profile() {
  return (
    <div className={styles.bodywithnav}>
      <div className={styles.card}>
        {/* <img className={styles.image} src={ph} /> */}
        <div className={styles.info}>
          <h1 className="card-username"><GrUser/>  Grigange  <code className="card-AEM">3870</code></h1>
          <label htmlFor="text">First name</label>
          <h3 className="card-firstname">Aggelos</h3>
          
          <label htmlFor="text">Last name</label>
          <h3 className="card-lastname">Grigoriou</h3>
          
          <label htmlFor="email">Email</label>
          <h3 className="card-email">grigange@csd.auth.gr</h3>

          <label htmlFor="text">Role</label>
          <h3 className="card-email">Student</h3>

          <label htmlFor="text">Department</label>
          <h3 className="card-email">Computer Science Department</h3>
          
          <label htmlFor="password">Password</label>
          <h3 className="card-password">&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</h3><button>Change Password</button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
