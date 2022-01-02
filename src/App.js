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


function App() {
  return (

    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      
    </Router>
    
    
  );
}

export default App;