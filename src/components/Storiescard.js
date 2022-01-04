import React from 'react'
import {Card } from "react-bootstrap"

function Storiescard(props) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
    
                </Card.Body>
            </Card>
        </>
    )
}

export default Storiescard
