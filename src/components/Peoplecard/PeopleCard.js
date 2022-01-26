import React from 'react'
import {Container,Card} from "react-bootstrap"

function PeopleCard(props) {
    return (
        <Container className='peoplecon'>
            <Card className="peoplebody border-0">
                
                <Card.Body className="peoplebody2">
                <Card.Img className="peopleimg" variant="top" src={props.img} />
                    <Card.Text className="ptext1">{props.title} </Card.Text>
                    <Card.Text className="ptext2">
                        {props.text1}
                    </Card.Text>
                    <Card.Text className="ptext2">
                        {props.text2}
                    </Card.Text>
                    <Card.Text className="ptext2">
                        {props.text3}
                    </Card.Text>
    
                </Card.Body>
            </Card>
        </Container>
    )
}

export default PeopleCard
