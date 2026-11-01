import React from 'react'
import { Create, SimpleForm, EmailField, TextInput} from 'react-admin'
const enseignantCreate = (props) => {
  return (
   <Create title = 'Crée un compte Enseignant' {...props} >
    <SimpleForm>
    
        <TextInput source='First Name'/>
        <TextInput source='Last Name'/>
        <EmailField source='Email'/>
        <TextInput source='Password'/>

    </SimpleForm>

   </Create>
  )
}

export default enseignantCreate
