import React from 'react'
import {Card } from "react-bootstrap"
const Events = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">Events</span>
            </div>
        
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    )
}

export default Events
