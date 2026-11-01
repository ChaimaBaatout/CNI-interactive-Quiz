import React from 'react'
import { Edit, SimpleForm, EmailField, TextInput} from 'react-admin'
const coursEdit = (props) => {
  return (
   <Edit title = 'Modifier un compte Cours' {...props} >
    <SimpleForm>

        <TextInput disabled source='id'/>
        <TextInput source='category'/>
        <TextInput source='titre'/>
        <TextInput multiline source='contenus'/>


    </SimpleForm>

   </Edit>
  )
}

export default coursEdit