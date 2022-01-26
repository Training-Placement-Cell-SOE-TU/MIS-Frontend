import React from 'react'
import {Container, Card} from 'react-bootstrap'
import '../../sections/Events/events.css'
function Eventcard(props) {
    return (
        <Container className="econcard">
            <Card className='econcard1 border-0'>
                <Card.Body className="eventbody">
                    <Card.Text className="etext1"> {props.title} </Card.Text>
                    <Card.Text className="etext3">{props.date}  </Card.Text>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Text className="etext2">{props.text}  </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}


export default Eventcard