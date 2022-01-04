import React from 'react'
import {Container, Card } from "react-bootstrap"

function Storiescard(props) {
    return (
        <Container className="crdcont">
            <Card className="storycrd">
                <Card.Img src={props.img} />
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
    
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Storiescard
