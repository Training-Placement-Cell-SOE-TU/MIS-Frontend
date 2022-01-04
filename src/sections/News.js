import React from 'react'
import Jobcard from '../components/Jobcard'

const News = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">News &amp; Notifications</span>
            </div>
            <Jobcard
            title="News"
            date="05/01/2022"
            btn="Know More"
            />
            
        </section>
    )
}

export default News
