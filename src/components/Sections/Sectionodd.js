import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './sectionscomp.css'
function Sectionodd(props) {
    return (
        <section className="sctn_odd">

<span className='bigscreens1'>
<Container >
                <Row className="sec">

                <Col>
                    <div className="tnpcontainer">
                        <div className="icon"><img src={props.icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a1">{props.title}</h4>
                        <h4 className="a2">
                           {props.description}
                        
                        </h4>                        

                    </div>
                    </Col>
                    <Col>
                        <img className="tnp1" src={props.image} alt="tnp1" width="260" height="240"/>
                </Col>
                    
            </Row>
            </Container>
</span>
                

<span className='smallscreens1'>
<Container >
                <Row className="sec">

                <Col>
                    <div className="tnpcontainer">
                        <div className="icon"><img src={props.icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a1">{props.title}</h4>
                        <h4 className="a2">
                           {props.description}
                        
                        </h4>                        

                    </div>
                    </Col>
         
                    
            </Row>
            </Container>
</span>
        </section>
    )
}


export default Sectionodd
