import React from 'react'
import {Card} from 'react-bootstrap'

function Eventcard(props) {
    return (
        <div className="eventcontainer">
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title> {props.title} </Card.Title>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Text>{props.text}  </Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}


export default Eventcard