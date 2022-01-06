import React from 'react'
import {Container,Col,Row} from "react-bootstrap"
import PeopleCard from '../components/PeopleCard'
import eventimg1 from '../components/images/eventimg1.png'

const People = () => {
    return (
        
            <section className="storiescontainer">
            <Container>
            <div className="event1">
                <span className="event1text">People</span>
            </div>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                    <PeopleCard
                            img={eventimg1}
                            title="Prof. Sarat Saharia"
                            text1="Professor in charge"
                            text2="Training &amp; Placement Cell,"
                            text3="School of Engineering"
                        />
                    </Col>
                    <Col>
                    <PeopleCard
                            img={eventimg1}
                            title="Prof. Sarat Saharia"
                            text1="Professor in charge"
                            text2="Training &amp; Placement Cell,"
                            text3="School of Engineering"
                        />
                    </Col>
                    <Col>
                    <PeopleCard
                            img={eventimg1}
                            title="Prof. Sarat Saharia"
                            text1="Professor in charge"
                            text2="Training &amp; Placement Cell,"
                            text3="School of Engineering"
                        />
                    </Col>
                </Row>
                
            </Container>
            
        </section>
        
    )
}

export default People
