import React from 'react'
import { List, Datagrid, EmailField, TextField, EditButton, DeleteButton } from 'react-admin' 

const enseignantList = (props) => {
  return <List {...props}>
    <Datagrid>
        <TextField source='id' />
        <TextField source='First Name' />
        <TextField source='Last Name' />
        <EmailField source='Email' />
        <TextField source='Password' />
        <EditButton basepath='/Enseignants' />
        <DeleteButton basepath='/Enseignants' />


    </Datagrid>

  </List>
}

export default enseignantList
