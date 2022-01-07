import React from 'react'
import {Container, Card, Button} from "react-bootstrap"

function Jobcard(props) {
    return (
        <Container className="jobscon" >
            
            <Card className="jobscon1 border-0" >

                <Card.Body className="jobbody">
                    <Card.Text className="jobtext1"><a className="link" href={props.link} target="_blank" rel='noreferrer'>{props.title}</a></Card.Text>
                        <Card.Text className="jobtext2">
                            {props.date}
                        </Card.Text>

                        <style type="text/css">
                            {`
                                .btn-flat {
                                            background-color:#0066ff;
                                            color: white;
                                            border-radius:20px;
                                            font-size: 12px;
      
                                            }

                                            .btn-flat:hover {
                                                background-color:#0066ff;
                                                color: white;
                                                border-radius:20px;
                                                font-size: 12px;
          
                                                }

                                .btn-l {
                                            padding: 10px 20px;
                                            
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
