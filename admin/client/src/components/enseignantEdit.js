import React from 'react'
import { Edit, SimpleForm, EmailField, TextInput} from 'react-admin'
const enseignantEdit = (props) => {
  return (
   <Edit title = 'Modifier un compte Enseignant' {...props} >
    <SimpleForm>

        <TextInput disabled source='id'/>
        <TextInput source='First Name'/>
        <TextInput source='Last Name'/>
        <EmailField source='Email'/>
        <TextInput source='Password'/>


    </SimpleForm>

   </Edit>
  )
}

export default enseignantEdit
