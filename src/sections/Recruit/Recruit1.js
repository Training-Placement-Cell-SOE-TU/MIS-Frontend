import React from 'react'

function Recruit1(props) {
    return (
        <section className="sctn_recruit">

        
                    <div className="tnpcontainer1">
                        <div className="icon1"><img src={props.icon} alt="icon" width="50" height="50" /></div>
                        <h4 className="a3">{props.title}</h4>
                        <h4 className="a4">
                           {props.description}
                        
                        </h4>                        

                    </div>
                  
        </section>
    )
}


export default Recruit1
