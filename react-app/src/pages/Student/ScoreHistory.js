import React from "react";
import HistoryItem from "../../components/HistoryItem";
import styles from "../../css/ScoreHistory.module.css"


function ScoreHistory() {
  return (
    <div className="bodywithnav">
        <h1>Score History</h1>
      <table>
        <thead>
          <tr >
            <th>Date</th>
            <th>Quiz Name</th>
            <th>Teacher's Name</th>
            <th>Class Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.success}>
            <td>12/2/19</td>
            <td>Quiz 1</td>
            <td>Valakh</td>
            <td>Web Development</td>
            <td>20/20</td>
          </tr>
          <tr className={styles.success}>
            <td>7/2/19</td>
            <td>Quiz 2</td>
            <td>Valakh</td>
            <td>Web Development</td>
            <td>19/20</td>
          </tr>
          <tr className={styles.fail}>
            <td>7/2/19</td>
            <td>Quiz 3</td>
            <td>Valakh</td>
            <td>Web Development</td>
            <td>15/20</td>
          </tr>
          <tr className={styles.success}>
            <td>2/5/19</td>
            <td>Quiz 6</td>
            <td>Valakh</td>
            <td>Web Development</td>
            <td>19/20</td>
          </tr>
          <tr className={styles.fail}>
            <td>7/2/19</td>
            <td>Quiz 2</td>
            <td>Vrakas</td>
            <td>Programming</td>
            <td>4/20</td>
          </tr>
          <tr className={styles.success}>
            <td>7/2/19</td>
            <td>Quiz 2</td>
            <td>Vrakas</td>
            <td>Programming</td>
            <td>19/20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreHistory;
