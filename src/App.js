import React from 'react';
import './App.css'
//import {Route , Switch} from 'react-router-dom';
import Whoweare from './Component/Whoweare';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar/Navbar';
import VideoSlider from "./Component/VideoSlider/VideoSlider"
import IntroPage from "./Component/IntroPage/IntroPage"

function App() {
  return ( 
    <div className="App">
     <Whoweare/>
     <Footer/>    
     <Navbar/>
     <VideoSlider/>
     <IntroPage/>
     
    {/*} <Switch>
            <Route exact path='' component={} />
            <Route exact path='' component={} />
            
        </Switch>*/}
    </div>
  );
}

export default App;
