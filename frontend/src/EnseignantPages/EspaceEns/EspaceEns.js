import React from "react";
import "./EspaceEns.css";

const EspaceEns = () => {
  return (
    <div>
      <div1 class="sidebar">
        <a class="active" href="EspaceEns">
          Espace Enseignant
        </a>
        <a href="StudentList">Student List</a>
        <a href="Cources">Courses</a>
        <a href="Scores">Scores</a>
      </div1>

      <div2>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>chaima</td>
            <td>baatout</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Student1</td>
            <td>Student1</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Student2</td>
            <td>Student2</td>
            <td>6</td>
          </tr>
          <tr>
            <td>Student3</td>
            <td>Student3</td>
            <td>4</td>
          </tr>
        </table>
      </div2>
    </div>
  );
};

export default EspaceEns;
