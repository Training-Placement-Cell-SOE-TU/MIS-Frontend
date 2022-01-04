import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import Home from "./sections/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Events from "./sections/Events"
import NotFound from "./sections/NotFound"
import About from "./sections/About";
import Stories from "./sections/Stories";
import People from "./sections/People";
import Placement from "./sections/Placement";


function App() {
  return (

    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events}/>
          <Route path="/about" component={About}/>
          <Route path="/stories" component={Stories}/>
          <Route path="/people" component={People}/>
          <Route path="/placements" component={Placement}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      
    </Router>
    
    
  );
}

export default App;