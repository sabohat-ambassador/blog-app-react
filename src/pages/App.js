import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';

import WebDesign from "./WebDesign";
import AppDesign from "./AppDesign";
import GraphicDEsign from "./GraphicDEsign";
import Header from "../components/Header";
import Footer from '../components/Footer'
import LastSection from '../components/LastSection'


function App() {
  return (
    <Router>
      <div className="container">
        

        <Header/>
      
        <Switch>
       
          <Route path="/webdesign">
            <WebDesign />
          </Route>
          <Route path="/appdesign">
            <AppDesign />
          </Route>
          <Route path="/graphicdesign">
            <GraphicDEsign />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

    

      </div>
      <div className='container'>
            <LastSection theme='Let’s talk about your project' page='Ready to take it to the next level? Contact us today and find out 
how our expertise can help your business grow.' link='Get in touch'/>
        </div>
      <footer className='main-footer'>
    
            <Footer logo='img/whitelogo.svg' company='OUR COMPANY' locations='LOCATIONS' contact='CONTACT' office='Designo Central Office' street='3886 Wellington Street' toronto='Toronto, Ontario M9C 3J5'
            central='Contact Us (Central Office)' tel=' +1 253-863-8967 ' email='M : contact@designo.co'/>
        
    </footer>
    </Router>
  );
}

export default App;
