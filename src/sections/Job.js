import React from 'react'
import Jobcard from '../components/Jobcard'

const Job = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">Latest Job Postings</span>
            </div>
            <Jobcard
            title="News"
            date="01/01/2022"
            btn="Know More"
            />
            
        </section>
    )
}

export default Job
