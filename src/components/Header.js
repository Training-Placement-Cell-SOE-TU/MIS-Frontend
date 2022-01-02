import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import logo from './tu.png';

const Header = () => {
  return (
    <header>
            <Navbar className= "navbaar"  variant="dark" expand="lg" collapseOnSelect>
            
                <div className="tulogo"> <a href="/"><img src={logo} alt="tulogo" width="60" height="60" /></a></div>
                <Navbar.Brand  href="/" ><span className="logo" >Training and Placement Cell</span> <br/> <span className="logo2" >School of Engineering,Tezpur University</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mx-auto naav'>
                  <Nav.Link href="/events" ><span className="navlnk">Events</span></Nav.Link>
                  <Nav.Link href="/placements" ><span className="navlnk">Placements</span></Nav.Link>
                  <Nav.Link href="/jobs" ><span className="navlnk">Latest Job Postings</span></Nav.Link>
                  <Nav.Link href="/notifications" ><span className="navlnk">News &amp; Notifications </span></Nav.Link>
                  <Nav.Link href="/about" ><span className="navlnk">About Us </span></Nav.Link>
                  <Nav.Link href="/more" ><span className="navlnk1">More </span></Nav.Link>



                </Nav> 
  
              </Navbar.Collapse>
            
            </Navbar>

            
          </header>
  )
}

export default Header

