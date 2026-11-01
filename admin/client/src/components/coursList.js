import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin' 

const coursList = (props) => {
  return <List {...props}>
    <Datagrid>
        <TextField source='id' />
        <TextField source='category' />
        <TextField source='titre' />
        <TextField multiline source='contenus' />
        <EditButton basepath='/Cours' />
        <DeleteButton basepath='/Cours' />


    </Datagrid>

  </List>
}

export default coursList