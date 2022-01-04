import React from 'react'
import {Card, Button} from "react-bootstrap"

function Jobcard(props) {
    return (
        <>
            
            <Card style={{ width: '18rem' }} className="jobscon" >

                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.date}
                        </Card.Text>
                <Button variant="primary">{props.btn}</Button>
                </Card.Body>
            </Card>
            
        </>
    )
}

export default Jobcard
