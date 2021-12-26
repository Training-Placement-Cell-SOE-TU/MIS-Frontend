import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import icon from '../components/images/SmallIcons-01.png'
import tnp1 from '../components/images/Illustrations-01.png'

const Sectionodd = () => {
    return (
        <section className="sctn_odd">
            <Container >
                <Row>
                <Col>
                    <div className="tnpcontainer">
                        <div className="icon"><img src={icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a1">Summer/Winter Internship Programme</h4>
                        <h4 className="a2">
                            The Summer/Winter Internship programme conducted after
                            the first year of studentship is intended to provide the 
                            students first-hand experience of the corporate world. While
                            working closely with company executives, they develop a 
                            long-term perspective of their career during such 
                            productive short-term assignments as well as evaluate them for
                            the purpose of giving them pre-placement offers. Internships
                            with stipend in IT and other industry for BTech seventh 
                            semester, MTech third semester and MCA students from sixth
                            months to 1 year is right now a very effective practice from 
                            T&amp;P Cell.
                        
                        </h4>                        

                    </div>
                    </Col>
                    <Col>
                        <img className="tnp1" src={tnp1} alt="tnp1" width="280" height="240"/>
                    </Col>
                     
            </Row>
            </Container>
        </section>
    )
}

export default Sectionodd
