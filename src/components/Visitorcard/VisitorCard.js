import React from 'react'
import {Container, Card} from "react-bootstrap"

function Visitor(props) {
    return (
        <Container className="viscon" >
            
            <Card className="viscon1 border-0" >

                <Card.Body className="visbody">
                    <Card.Text className="vistext1">{props.title}</Card.Text>
                        <Card.Text className="vistext2">
                            {props.text1}
                        </Card.Text>
                        <Card.Text className="vistext2" >
                            {props.text2}
                        </Card.Text>

                        
                </Card.Body>
            </Card>
            
        </Container>
    )
}

export default Visitor
