import React from 'react'
import Eventcard from '../components/Eventcard'
import eventimg1 from '../components/images/eventimg1.png'
import {Container, Row, Col} from "react-bootstrap"


const Events = () => {
    return (
        <section className="eventmain">
            <div className="event1">
            <span className="event1text">Events</span>
            </div>
            
            <Container>
                <Col>
                    <Row>
                    <Eventcard
                        title="Event's Name"
                        image={eventimg1}
                        date="05/01/22"
                        text="IEEE Tezpur University, as part of IEEE day celebration brings for 
                            you an one day bootcamp on full stack development. Along with video tutorials,
                            work step by step on real world project and learn concepts from basics. Learn
                                best practices of software development from industry experts and clear all 
                                your doubts in an one to one interaction. Collaborate on an IEEE project and
                                get certification from IEEE. Mentor for the bootcamp will be Nityananda 
                                Gohain who is currently working as Software Engineer 1 in Atlan."
                        />
                    </Row>

                    <Row>
                    <Eventcard
                        title="Event's Name"
                        image={eventimg1}
                        date="05/01/22"
                        text="IEEE Tezpur University, as part of IEEE day celebration brings for 
                            you an one day bootcamp on full stack development. Along with video tutorials,
                            work step by step on real world project and learn concepts from basics. Learn
                                best practices of software development from industry experts and clear all 
                                your doubts in an one to one interaction. Collaborate on an IEEE project and
                                get certification from IEEE. Mentor for the bootcamp will be Nityananda 
                                Gohain who is currently working as Software Engineer 1 in Atlan."
                        />
                    </Row>
                </Col>
            </Container>
            
            

       
            
        </section>
    )
}

export default Events
