import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import NuevaPersona from './components/NuevaPersona'
import Personas from './components/Personas'
import EditarPersona from './components/EditarPersona'

function App() {
  return (
      <React.StrictMode>
        <Router>
          <Route exact path="/" component={Main}/>
          <Route exact path="/NuevaPersona" component={NuevaPersona}/>
          <Route exact path="/Personas" component={Personas}/>
          <Route exact path="/EditarPersona" component={EditarPersona}/>
        </Router>
    </React.StrictMode>
  );
}

export default App;
