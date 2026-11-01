import React from 'react'
import { Create, SimpleForm, TextInput} from 'react-admin'
const coursCreate = (props) => {
  return (
   <Create title = 'Crée un compte Cours' {...props} >
    <SimpleForm>
    
        <TextInput source='category '/>
        <TextInput source='titre'/>
        <TextInput multiline source='contenus'/>
        

    </SimpleForm>

   </Create>
  )
}

export default coursCreate