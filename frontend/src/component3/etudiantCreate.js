import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'
const etudiantCreate = (props) => {
  return (
   <Create title = 'Crée un compte Etudiant' {...props} >
    <SimpleForm>
    
        <TextInput source='First Name'/>
        <TextInput source='Last Name'/>
        <TextInput source='Email'/>
        <TextInput source='Password'/>

    </SimpleForm>

   </Create>
  )
}

export default etudiantCreate
