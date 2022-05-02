import React from "react";
import HistoryItem from "../../components/HistoryItem";
import styles from "../../css/ScoreHistory.module.css"


function ScoreHistory() {
  return (
    <div className="bodywithnav">
      <div className={styles.table}>
        <div className={styles.head}>
            <div>Date</div>
            <div>Quiz Name</div>
            <div>Teacher's Name</div>
            <div>Class Name</div>
            <div>Score</div>
        </div>
        <div className={styles.body}>
          <div className={styles.success}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>20/20</div>
          </div>
          <div className={styles.success}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>20/20</div>
          </div>
          <div className={styles.fail}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>5/20</div>
          </div>
          <div className={styles.success}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>20/20</div>
          </div>
          <div className={styles.success}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>20/20</div>
          </div>
          <div className={styles.success}>
            <div>12/2/19</div>
            <div>Quiz 1</div>
            <div>Vakalh</div>
            <div>Web Development</div>
            <div>20/20</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreHistory;
