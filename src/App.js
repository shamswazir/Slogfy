import React from 'react';
import './App.css'
//import {Route , Switch} from 'react-router-dom';
import Whoweare from './Component/Whoweare';
import Footer from './Component/Footer';

function App() {
  return ( 
    <div className="App">
     <Whoweare/>
     <Footer/>    
    </div>
  );
}

export default App;
