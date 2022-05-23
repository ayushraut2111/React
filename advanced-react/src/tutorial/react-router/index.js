import React from 'react'
import {BrowserRouter as Router ,Route,Routes, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About';
import People from './People';
const ReactRouterSetup = () => {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Home />}/>  {/*here path='/' means it is the home page  */}
        <Route path='/about' element={<About />}/> {/* then after home page we can give paths as /..... and we have to give pages in element tag */}
        <Route path='/people' element={<People />}/>
        </Routes>
    </Router>
  );
}

export default ReactRouterSetup;