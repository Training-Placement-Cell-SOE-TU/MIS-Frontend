import React from 'react'
import notfound from '../components/images/notfound.svg'


const NotFound = () => {
    return (
        <section  className="notfound"> 
            <div className="nf1" >
                <img src={notfound} alt="not_found_image" width="180" height="180" />
                <div className="nftext" >Not Found</div>
            </div>
        </section>
        
    )
}

export default NotFound
