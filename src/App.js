import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";

import Home from "./sections/Home/Home"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Events from "./sections/Events/Events"
import NotFound from "./sections/NotFound/NotFound"
import About from "./sections/About/About";
import Stories from "./sections/Stories/Stories";
import People from "./sections/People/People";
import Placement from "./sections/Placement/Placement";
import Job from "./sections/Job/Job";
import News from "./sections/News/News";
import Visitor from "./sections/Visitor/Visitor";
import Form from "./sections/Form/Form"
import StudentProfile from "./sections/Users/Student/StudentProfile/StudentProfile";

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
          <Route path="/jobs" component={Job}/>
          <Route path="/news" component={News}/>
          <Route path="/visitors" component={Visitor}/>
          <Route path="/admin" component={Form}/>
          <Route path="/student-profile" component={StudentProfile}/>
          

          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer />
      
    </Router>
    
    
  );
}

export default App;