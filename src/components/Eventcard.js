import React from 'react'
import {Container, Card} from 'react-bootstrap'

function Eventcard(props) {
    return (
        <Container className="econcard">
            <Card className='econcard1'>
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Text>{props.text}  </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}


export default Eventcard