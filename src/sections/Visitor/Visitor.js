import React from 'react'
import Visitorcard from '../../components/Visitorcard/VisitorCard'
import './visitor.css'

const Visitor = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">Visitors</span>
            </div>
            <Visitorcard
            title="Mr. Dharma Saikia"
            text1="Unit Head,"
            text2="Tata Consumers"
            />
            <Visitorcard
            title="Mr. Dharma Saikia"
            text1="Unit Head,"
            text2="Tata Consumers"
            />
            <Visitorcard
            title="Mr. Dharma Saikia"
            text1="Unit Head,"
            text2="Tata Consumers"
            />
            
        </section>
    )
}

export default Visitor
