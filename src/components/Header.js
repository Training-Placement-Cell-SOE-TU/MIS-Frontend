import React from 'react'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
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
                  <Nav.Link href="/news" ><span className="navlnk">News &amp; Notifications </span></Nav.Link>
                  <Nav.Link href="/about" ><span className="navlnk">About Us </span></Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle  >
                        <span className="more">More</span>
                    </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="http://www.tezu.ernet.in/" target="_blank"> TU Home</Dropdown.Item>
                        <Dropdown.Item href="/stories">Stories</Dropdown.Item>
                        <Dropdown.Item href="/visitors">Visitors</Dropdown.Item>
                        <Dropdown.Item href="/people">People</Dropdown.Item>
                        <Dropdown.Item href="/admin">Admin Console</Dropdown.Item>

                      </Dropdown.Menu>
                  </Dropdown>



                </Nav> 
  
              </Navbar.Collapse>
            
            </Navbar>

            
          </header>
  )
}

export default Header

