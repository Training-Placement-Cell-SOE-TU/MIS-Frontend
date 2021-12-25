import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from './tu.png';
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <header>
            <Navbar className= "navbaar"  variant="dark" expand="lg" collapseOnSelect>
            
                <div className="logo"><img src={logo} alt="tulogo" width="60" height="60" /></div>
                <Navbar.Brand  href="/" ><span className="logo" >Training and Placement Cell</span> <br/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto naav'>
                  <Nav.Link  ><Link  to="about" spy={true} smooth={false}><span className="navlnk">Events</span></Link></Nav.Link>
                  <Nav.Link  ><Link  to="skills" spy={true} smooth={false}><span className="navlnk">Placements</span></Link></Nav.Link>
                  <Nav.Link ><Link  to="projects" spy={true} smooth={false}><span className="navlnk">Latest Job Postings</span></Link></Nav.Link>
                  <Nav.Link ><Link  to="contact" spy={true} smooth={false}><span className="navlnk">News &amp; Notifications </span></Link></Nav.Link>
                  <Nav.Link ><Link  to="contact" spy={true} smooth={false}><span className="navlnk">About Us </span></Link></Nav.Link>
                  <Nav.Link ><Link  to="contact" spy={true} smooth={false}><span className="navlnk">More </span></Link></Nav.Link>



                </Nav> 
  
              </Navbar.Collapse>
            
            </Navbar>

            
          </header>
  )
}

export default Header

