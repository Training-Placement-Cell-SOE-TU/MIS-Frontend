import React from 'react'
import Jobcard from '../../components/Jobcard/Jobcard'
import '../Events/events.css'

const News = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">News &amp; Notifications</span>
            </div>
            <Jobcard
            title="Academic progression 2021 Batch"
            link="http://www.tezu.ernet.in/event/2021/TPCell_Workshop_DrDeepakVohra.pdf"
            date="05/01/2022"
            btn="Know More"
            />
            
            <Jobcard
            title="Organize a Workshop by Dr. Deepak Vohra 24 Dec - 26 Dec"
            link="http://www.tezu.ernet.in/event/2021/TPCell_Workshop_DrDeepakVohra.pdf"
            date="05/01/2022"
            btn="Know More"
            />

            <Jobcard
            title="News"
            date="05/01/2022"
            btn="Know More"
            />
        </section>
    )
}

export default News
