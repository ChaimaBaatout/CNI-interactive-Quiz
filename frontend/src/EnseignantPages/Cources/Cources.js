import React from 'react'


const Cources = () => {
  return (
    <div class='row'>
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
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
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

export default Cources
