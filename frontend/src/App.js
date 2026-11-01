import React from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import SignUpS from './components/signupS.component'
import LoginS from './components/loginS.component'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'



function App() {
  return (
    <Router>
      

        
        

<div className="topnav">
  <a className="active" href="/sign-inS">Home</a>
  
  <a href="/sign-up">Sign up As Enseignant</a>
  <a href="/sign-upS">Sign up As Etudiant</a>
</div>











        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-inS" element={<LoginS />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-upS" element={<SignUpS />} />
              <Route path="/Home" element={<Home />} />

            </Routes>
            <switch>
            <Route path="/Home"  exact> <Home /> </Route> 
            <Route path="/Quiz"  exact> <Quiz /> </Route> 
            <Route path="/Result"  exact> <Result/> </Route> 

            </switch>
          </div>
        </div>
    
    </Router>
  )
}

export default App
