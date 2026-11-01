import React from 'react'
import "./StudentList.css"
const StudentList = () => {
  return (
    <div class='row' >
         <div1 class="sidebar">
    <a class="active" href="EspaceEns">Espace Enseignant</a>
    <a href="StudentList">Student List</a>
      <a href="Cources">Courses</a>
      <a href="Scores">Scores</a>

    </div1>
  
    <div2>
      
      <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Points</th>
    <th>Ajouter</th>
    <th>Modifier</th>
    <th>Supprimer</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
    <td><button class="btn info">Ajouter</button></td>
    <td><button class="btn success">Modifier</button></td>
    <td><button class="btn danger">Supprimer</button></td>


  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Adam</td>
    <td>Johnson</td>
    <td>67</td>
  </tr>
</table>

</div2>
    </div>
  )
}

export default StudentList
