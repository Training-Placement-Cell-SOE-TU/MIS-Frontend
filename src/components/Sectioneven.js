import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import icon from '../components/images/SmallIcons-01.png'
import tnp1 from '../components/images/Illustrations-01.png'

const Sectioneven = () => {
    return (
        <section className="sctn_odd">
            <Container >
                <Row>
                <Col>
                        <img className="tnp1" src={tnp1} alt="tnp1" width="280" height="240"/>
                    </Col>
                <Col>
                    <div className="tnpcontainer">
                        <div className="icon"><img src={icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a1">Pre-Placement Grooming Programme</h4>
                        <h4 className="a2">
                            The Summer/Winter Internship programme conducted after <br/>
                            the first year of studentship is intended to provide the stu- <br/>
                            dents first-hand experience of the corporate world. While<br/>
                            working closely with company executives, they develop a <br/>
                            long-term perspective of their career during such pro-<br/>
                            ductive short-term assignments as well as evaluate them for<br/>
                            the purpose of giving them pre-placement offers. Internships <br/>
                            with stipend in IT and other industry for BTech seventh se-<br/>
                            mester, MTech third semester and MCA students from sixth<br/>
                            months to 1 year is right now a very effective practice from <br/>
                            T&amp;P Cell.
                        
                        </h4>                        

                    </div>
                    </Col>
                    
                     
            </Row>
            </Container>
        </section>
    )
}

export default Sectioneven
