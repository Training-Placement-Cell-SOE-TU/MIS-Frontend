import React from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Section1 from './sections/Section1'
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"


function App() {
  return (
    <>
      
      <main>
            
          <div id="home">
              <Header/>
            </div>

            <div id="home">
              <Section1/>
            </div>

  

            <div id="home">
              <Section3/>
            </div>

            <div id="home">
              <Section4/>
            </div>

            

      </main>
      <Footer/>
    </>
  );
}

export default App;