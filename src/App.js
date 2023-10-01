 import React from 'react'
 import { Routes, Route } from 'react-router-dom';
 import Home from './Copmnents/Home';
 import About  from './Copmnents/About';
import PageNotFound from './Copmnents/PageNotFound';
import Menu from './Copmnents/Menu';
import Logo from './Copmnents/Logo';

 const App = () => {
  return (
    <>
     <Logo/>
     <Menu/>
    <Routes>
     <Route exact path='/' Component={Home} />
     <Route exact path='/Home' Component={Home} />
     <Route path='/about' Component={About} />
     {/* <Route path="/" component={PageNotFound} /> */}
    </Routes>
    </>
  );
}
export default App;
