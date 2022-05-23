import React from 'react'
import {BrowserRouter as Router ,Route,Routes, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About';
import People from './People';
const ReactRouterSetup = () => {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/people' element={<People />}/>
        </Routes>
    </Router>
  );
}

export default ReactRouterSetup;