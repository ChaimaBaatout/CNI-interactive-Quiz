import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'
const etudiantEdit = (props) => {
  return (
   <Edit title = 'Modifier un compte Etudiant' {...props} >
    <SimpleForm>

        <TextInput disabled source='id'/>
        <TextInput source='First Name'/>
        <TextInput source='Last Name'/>
        <TextInput source='Email'/>
        <TextInput source='Password'/>


    </SimpleForm>

   </Edit>
  )
}

export default etudiantEdit
