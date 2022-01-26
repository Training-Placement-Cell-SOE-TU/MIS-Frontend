import React from 'react'
import Section1 from "../FrontSections/Section1"
import Section3 from "../FrontSections/Section3"
import Section4 from "../FrontSections/Section4"
import Slider from "../FrontSections/Section2"
import './home.css'

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
