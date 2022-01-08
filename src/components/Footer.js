import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
           
            <Container className="bigscreenfooter" >
                <Row className='mx-auto px-1 py-5'>

                    
                <Col>
                    <Row className="row1"><span className="f1"><a href="/" className='link1'> Training and Placement Cell </a></span><br/> <span className="f2">School of Engineering, Tezpur University</span></Row>
                    <Row className="row2"><span className='f4'>T&amp;P Cell,Deans Building,<br/>School of Engineering,<br/>03712-273258 
                    <br/>pijush@tezu.ernet.in,<br/>tuplacement1@gmail.com <br/>tuplacement2@gmail.com</span>
                    </Row>
                </Col>

                <Col>
                </Col>

                <Col>
                    <Row className="row2"><span className='f3'><a href="/events" className='link1'> Events</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/placements" className='link1'> Placements</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/jobs" className='link1'> Latest Job Postings</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/news" className='link1'> News&amp;Notifications</a></span></Row>

                </Col>

                <Col>
                    <Row className="row2"><span className='f3'><a href="/about" className='link1'> About Us</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="http://www.tezu.ernet.in/" className='link1'>TU Home</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/people" className='link1'> People</a></span></Row>
                    

                </Col>

                <Col>
                    <Row className="row2"><span className='f3'><a href="/visitors" className='link1'> Visitors</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/stories" className='link1'> Stories</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/admin" className='link1'> Admin Console</a></span></Row>
                    

                </Col>

                </Row>
            </Container>

            
            {/* -------SMALL SCREENS----- */}
            
            <Container className="smallscreenfooter" >
                <Col className='mx-auto px-3 py-5'>

                    
                <Row className="firstrow">
                    <span className="f1"><a href="/" className='link1'> Training and Placement Cell </a></span><br/> <span className="f2">School of Engineering, Tezpur University</span>
                   
                    
                </Row>

                <Row className="secondrow">
                <span className='f4'>T&amp;P Cell,Deans Building,<br/>School of Engineering,<br/>03712-273258 
                    <br/>pijush@tezu.ernet.in,<br/>tuplacement1@gmail.com <br/>tuplacement2@gmail.com</span>
                </Row>

               
                <Row className='thirdrow'>

                    <Col> 
                    <Row className="row2"><span className='f3'><a href="/events" className='link1'> Events</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/placements" className='link1'> Placements</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/jobs" className='link1'> Latest Job Postings</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/news" className='link1'> News&amp;Notifications</a></span></Row>
                    <Row className='row2'><span className='f3'><a href="/about" className='link1'> About Us</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="http://www.tezu.ernet.in/" className='link1'>TU Home</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/people" className='link1'> People</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/visitors" className='link1'> Visitors</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/stories" className='link1'> Stories</a></span></Row>
                    <Row className="row2"><span className='f3'><a href="/admin" className='link1'> Admin Console</a></span></Row>
                    </Col>
                    
                    
                    

                </Row>
                </Col>
            </Container>

           
        
        </footer>
    )
}

export default Footer
 