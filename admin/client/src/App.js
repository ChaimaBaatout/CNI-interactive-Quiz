import React from 'react';
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import enseignantList from './components/enseignantList'
import enseignantCreate from './components/enseignantCreate'
import enseignantEdit from './components/enseignantEdit'
import etudiantList from './components/etudiantList'
import etudiantCreate from './components/etudiantCreate'
import etudiantEdit from './components/etudiantEdit'
import coursList from './components/coursList'
import coursCreate from './components/coursCreate'
import coursEdit from './components/coursEdit'



function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource 
    name = 'Enseignants' 
    list = {enseignantList} 
    create={enseignantCreate} 
    edit={enseignantEdit}
    />
    <Resource 
    name = 'Etudiant' 
    list = {etudiantList} 
    create={etudiantCreate} 
    edit={etudiantEdit}
    />
    <Resource 
    name = 'Cours' 
    list = {coursList} 
    create={coursCreate} 
    edit={coursEdit}
    />
  </Admin>
}

export default App;
