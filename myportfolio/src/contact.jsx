import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './heiress.css';
import { Button, Col, Container, Form, FormCheck, FormLabel, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';


export default function Contact () {
    const [menuVisible, setMenuVisible] = useState(false); // Track menu state
            
    const handleMenuClick = () => {
    setMenuVisible(true); // Show menu
    };

    const handleCloseClick = () => {
    setMenuVisible(false); // Hide menu
    };
    return (
        <>
           <header>
                <Container>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            <img src="heiress'-logo.png" alt="" height={40} />                      
                        </Col>
                        
                        <Col className='d-none d-md-none d-lg-block' lg={6}>
                            <ul className="top-navs">
                                <li><Link to='/' >Home</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact' className='active'>Contact</Link></li>
                            </ul>
                        </Col>

                        <Col className='d-lg-none d-flex justify-content-end links' xs={6} md={6}>
                            <ul id="lists" style={{top: menuVisible ? "90px" : "-300px"}}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/projects' className='active'>Projects</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                            <img src="hamburger-icon.svg" alt=""  id="menu" style={{ display: menuVisible ? "none" : "block" }} onClick={handleMenuClick}/>
                            <i className="bi bi-x" id="close" style={{ display: menuVisible ? "block" : "none" }} onClick={handleCloseClick}></i>
                        </Col>
                    </Row>

                    <Row className="hero-section-contact">
                        <Col xs={12} md={12} lg={6} className="offset-lg-3 text-center" style={{color: 'white'}}>
                            <h1>Get in touch</h1>
                            <p>I am ready to help! whether you are interested in launching a new project, refining your existing site, seeking a quote, or discussing a potential collaboration, don't hesitate to contact me.</p>
                            <div className="d-flex align-items-center gap-3 justify-content-center">
                                <img src="email-icon.png" alt="" />
                                <p className="p-0 m-0">uwaziesuccess02@gmail.com</p>
                            </div>

                            <div className="d-flex align-items-center gap-3 justify-content-center pt-3">
                                <img src="phone-icon.png" alt="" />
                                <p className="p-0 m-0">+2348163254519</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header> 

            <main className="contact-main">
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Row>
                                <Col xs={12} md={12} lg={4} >
                                    <ul className='social-icons-contact'>
                                        <li><a href=""><img src="linkedin-blue.png" alt="" /></a></li>
                                        <li><a href=""><img src="github.png" alt="" /></a></li>
                                        <li><a href=""><img src="facebook-blue.png" alt="" /></a></li>
                                        <li><a href=""><img src="whatsapp-green.png" alt="" /></a></li>
                                        <li><a href=""><img src="X-black.png" alt="" /></a></li>
                                        
                                    </ul>
                                    
                                </Col>

                                <Col xs={12} md={12} lg={8}>
                                    <Form>
                                        <Row>
                                            <Col xs={12} md={6} lg={6}>
                                                <div className="d-lg-flex justify-content-lg-between">
                                                    <div className="contact-input">
                                                        <p style={{fontWeight: 'bold'}}>Name</p>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} lg={6}>
                                                <div className="d-lg-flex justify-content-lg-between">
                                                    <div className="contact-input">
                                                        <p style={{fontWeight: 'bold'}}>Email</p>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} md={6} lg={6}>
                                                <div className="d-lg-flex justify-content-lg-between">
                                                    <div className="contact-input">
                                                        <p style={{fontWeight: 'bold'}}>Phone Number</p>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={12} md={12} lg={12}>
                                                <div className="d-flex justify-content-between">
                                                    <div className="contact-input">
                                                        <p style={{fontWeight: 'bold'}}>Message on the project details</p>
                                                        <textarea name="" id="" cols="50" rows="10"></textarea>
                                                    </div>
                                            
                                                </div>
                                            </Col>

                                            <div className="d-md-flex align-items-center">
                                                <Col xs={12} md={6} lg={8}>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <FormCheck type="checkbox"  id="terms" required></FormCheck>
                                                        <FormLabel for="terms" className="p-0 m-0" style={{fontSize: '13px', color: 'white'}}>I agree to <a href="">Terms of Services  </a>and Privacy Policy</FormLabel>
                                                    </div>
                                                </Col>

                                                <Col xs={12} md={6} lg={4} className=" text-center text-md-end" id="submit-btn">
                                                    <Link to=''><Button type="submit" className="rounded-2 py-2 px-4 border-0" style={{backgroundColor: '#5454D4'}}>Let's talk</Button></Link>
                                                </Col>
                                            </div>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </main>

            <footer>
                <Container>
                    <Row>
                        <Col>
                            <p className='text-center pt-3' style={{color: 'white', fontSize: '13px'}}>© 2025. Uwazie Success, All rights reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}