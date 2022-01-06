import React from 'react'
import {Container, Card, Button} from "react-bootstrap"

function Jobcard(props) {
    return (
        <Container className="jobscon" >
            
            <Card className="jobscon1 border-0" >

                <Card.Body className="jobbody">
                    <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.date}
                        </Card.Text>

                        <style type="text/css">
                            {`
                                .btn-flat {
                                            background-color:#0066ff;
                                            color: white;
                                            border-radius:20px;
                                            
      
                                            }

                                .btn-l {
                                            padding: 10px 20px;
                                            font-size: 14px;
                                            }
                                `}
                        </style>
                <Button variant="flat" size="l" className="jobbtn">{props.btn}</Button>
                </Card.Body>
            </Card>
            
        </Container>
    )
}

export default Jobcard
