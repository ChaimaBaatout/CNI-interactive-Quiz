import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin' 

const etudiantList = (props) => {
  return <List {...props}>
    <Datagrid>
        <TextField source='id' />
        <TextField source='First Name' />
        <TextField source='Last Name' />
        <TextField source='Email' />
        <TextField source='Password' />
        <EditButton basepath='/Etudiant' />
        <DeleteButton basepath='/Etudiant' />


    </Datagrid>

  </List>
}

export default etudiantList