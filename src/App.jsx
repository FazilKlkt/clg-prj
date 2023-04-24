import React from 'react'
import './App.css'

import Hero from './Hero'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from './Sidebar'
import signup from './Signup'
import login from './Login'
import Ubody from './Ubody'
import Filesbody from './Filesbody'
import Setbody from './Setbody'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Hero} />
          <Route path='/Signup' Component={signup} />
          <Route path='/Login' Component={login} />
          <Route path='/Dashboard' Component={Sidebar} />
          <Route path='/Dashboard/Upload' Component={Ubody} />
          <Route path='/Dashboard/Files' Component={Filesbody} />
          <Route path='/Dashboard/Setting' Component={Setbody} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default App