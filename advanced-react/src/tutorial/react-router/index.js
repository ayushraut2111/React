import React from 'react';
import {BrowserRouter as Router ,Route,Routes, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import People from './People';
const ReactRouterSetup = () => {
  return (
    <Router>  {/* we have to wrap the whole component in browserrouter element */}
        <Routes>   {/* we have to wrap every route inside routes element */}
        <Route exact path='/' element={<Home />}/>  {/*here path='/' means it is the home page  and exact means we want only this page's data to be shown on the screen we can add exact to all the route also */}
        <Route path='/about' element={<About />}/> {/* then after home page we can give paths as /..... and we have to give pages in element tag */}
        <Route path='/people' element={<People />}/>
        </Routes>
    </Router>
  );
}

export default ReactRouterSetup;