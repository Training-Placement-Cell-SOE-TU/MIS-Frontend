import React from 'react'
import {Container,Card} from "react-bootstrap"

function Storiescard(props) {
    return (
        <Container className='storycon'>
            <Card className="storybody border-0">
                
                <Card.Body className="storybody2">
                <Card.Img className="storyimg" variant="top" src={props.img} />
                    <Card.Text className="storytext1">{props.title} </Card.Text>
                    <Card.Text className="storytext2">
                        {props.text}
                    </Card.Text>
        
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Storiescard
