import React from 'react'
import Section1 from "./Section1"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Slider from "./Section2"

const Home = () => {
    return (
        <section className='home'>
           
           <Section1/>
           <Slider/>
           <Section3/>
           <Section4/>
         
        </section>
    )
}

export default Home
