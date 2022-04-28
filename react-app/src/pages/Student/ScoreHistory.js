import React from "react";
import HistoryItem from "../../components/HistoryItem";


function ScoreHistory() {
  return (
    <div className="bodywithnav">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Quiz Name</th>
            <th>Teacher's Name</th>
            <th>Class Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12/2/19</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
          <tr>
            <td>11/2/19</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreHistory;
