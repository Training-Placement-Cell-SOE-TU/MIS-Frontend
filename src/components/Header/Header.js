import axios from 'axios'
import React, { useEffect } from 'react'
import {Navbar, Nav, Dropdown} from 'react-bootstrap'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {Link, Redirect, useHistory} from 'react-router-dom'
import logo from "../tu.png"
import './header.css'
import profilePic from "../../sections/Users/Student/StudentProfile/profile.jpeg"
// \sections\Users\Student\StudentProfile\profile.jpeg

const Header = () => {

  const history = useHistory()

  const logOut = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  let data = {
    name : "Yoda Yo",
    profilePic:profilePic,
  }

  const baseurl = process.env.REACT_APP_BASE_URL;

  const [registered , setRegistered] = React.useState(false);
  const [overUserImg , setOverUserImg] = React.useState(false);

  useEffect(() => {
    if(localStorage.getItem("access-token")){
      data["name"] = localStorage.getItem("student_roll");
      console.log(data.name);
      setRegistered(true);
    }

    // axios.get(`${baseurl}/user/profile`, {})
  });

  const location = useLocation();
  if(location.pathname.includes('/admin-console')) return null;
  return (
    <header>
      <style type="text/css">
                            {`
                                .btn-flat {
                                            background-color:#fff;
                                            color: #0066ff;
                                            border-radius:20px;
                                            font-size: 12px;
                                            font-weight:500;
      
                                            }

                                              .btn-flat:hover {
                                                background-color:#fff;
                                                color: #0066ff;
                                                text-decoration:none;
                                                border-radius:20px;
                                                font-size: 12px;
          
                                                }
                                                .btn-l {
                                                  padding: 11px 12px;
                                                  
                                                  }
                                                  .btn-flat1 {
                                                    background-color:#fff;
                                                    color: #0066ff;
                                                    border-radius:20px;
                                                    font-size: 14px;
                                                    font-weight:600;
              
                                                    }
        
                                                      .btn-flat1:hover {
                                                        background-color:#fff;
                                                        color: #0066ff;
                                                        text-decoration:none;
                                                        border-radius:20px;
                                                        
                  
                                                        }
                                               


                                .btn-ol {
                                            padding: 8px 12px;
                                            
                                            }
                                `}
                        </style>

                      {/* -------------BIG SCREENS----------- */}

                        <span className='nav1con'>
                        <Navbar className= "navbaar"  variant="dark" >
            
                        <div className="tulogo"> <a href="/"><img src={logo} alt="tulogo" width="60" height="60" /></a></div>
                        <Navbar.Brand  href="/" ><span className="logo" >Training and Placement Cell</span> <br/> <span className="logo2" >School of Engineering, Tezpur University</span> </Navbar.Brand>
                        
                        <Nav className='mx-auto naav'>
                        <Link to="/events" ><span className="navlnk">Events</span></Link>
                        <Link to="/placements" ><span className="navlnk">Placements</span></Link>
                        <Link to="/jobs" ><span className="navlnk">Latest Job Postings</span></Link>
                        <Link to="/news" ><span className="navlnk">News &amp; Notifications </span></Link>
                        <Link to="/about" ><span className="navlnk">About Us </span></Link>
                        <Dropdown >
                        <Dropdown.Toggle variant='flat' size="l">
                          More
                        </Dropdown.Toggle>

                        <Dropdown.Menu  align="end">
                        <Dropdown.Item href="http://www.tezu.ernet.in/" target="_blank"> TU Home</Dropdown.Item>
                        <Dropdown.Item href="/stories">Stories</Dropdown.Item>
                        <Dropdown.Item href="/visitors">Visitors</Dropdown.Item>
                        <Dropdown.Item href="/people">People</Dropdown.Item>
                        <Dropdown.Item href="/admin">Admin Console</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                        </Nav> 
                        
                        </Navbar>


                        </span>
            

                      {/* ----------SMALL SCREENS------------ */}
                      <span className="nav2con">
                      <Navbar className= "navbaar2"  variant="dark" >
                      <span className='sidetoside'>

                      
                      <div className="tulogo"> <a href="/"><img src={logo} alt="tulogo" width="60" height="60" /></a></div>
                      <Navbar.Brand  href="/" ><span className="logo" >T&amp;P Cell</span> <br/> <span className="logo2" >SoE, Tezpur University</span> </Navbar.Brand>
                      <Nav className='mx-auto naav'>
                      <Dropdown>
                        
                        <Dropdown.Toggle variant='flat1' size="ol" >
                        More
                      </Dropdown.Toggle>
                        
                      

                      <Dropdown.Menu align="end">
                      <Dropdown.Item href="/events" >Events</Dropdown.Item>
                      <Dropdown.Item href="/placements" >Placements</Dropdown.Item>
                      <Dropdown.Item href="/jobs" >Latest Job Postings</Dropdown.Item>
                      <Dropdown.Item href="/news" >News &amp; Notifications </Dropdown.Item>
                      <Dropdown.Item href="/about" >About Us </Dropdown.Item>
                      <Dropdown.Item href="http://www.tezu.ernet.in/" target="_blank"> TU Home</Dropdown.Item>
                      <Dropdown.Item href="/stories">Stories</Dropdown.Item>
                      <Dropdown.Item href="/visitors">Visitors</Dropdown.Item>
                      <Dropdown.Item href="/people">People</Dropdown.Item>
                      <Dropdown.Item href="/admin">Admin Console</Dropdown.Item>
                      </Dropdown.Menu>
                      </Dropdown>
                      </Nav> 
                      </span>
                      </Navbar>

                      </span>

                      {!registered ? <div className="top_side_registration">
                      <span className="rightBtn loginBtn" ><a href="/student-login">Login</a> </span>
                      <span className="rightBtn registerBtn"><a href="/student-signup">Register</a></span>
                      </div>
                      :
                      <div className="top_side_registered" 
                      onMouseEnter={() => setOverUserImg(true)}
                      onMouseLeave={() => setOverUserImg(false)} >
                        {overUserImg && <span className="userName logoutName" onClick={
                          () => {
                            // <Redirect to="/" />
                            localStorage.removeItem('access-token');
                            localStorage.removeItem('student_roll');
                            setRegistered(false);
                            logOut();
                          }
                        }>Logout</span>}
                        {!overUserImg && <span className='userName'>{
                          localStorage.getItem("student_roll") ? localStorage.getItem("student_roll") : data.name
                        }</span>}
                        <a href={`/student/${localStorage.getItem("student_roll")}`}><img src={data.profilePic} alt={data.name} /></a>
                      </div>
                    }
                      

            
          </header>
  )
}

export default Header

