import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './heiress.css'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Projects () {

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
                            <ul className='top-navs'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/projects' className='active'>Projects</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
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

                    <Row className="hero-section">
                        <Col xs={12} md={12} lg={6} className="offset-lg-3 text-center" style={{color: 'white'}}>
                            <h1>My Projects</h1>
                            <p>A curated collection of my most significant work. Each project demonstrates my skills, passion, and commitment to excellence and showcases my ability to bring ideas to life through dedication and innovation.  </p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <section style={{backgroundColor: '#19191B'}}>
                <Container>
                    <Row>
                        <div className="project-vectors1">
                            <img src="first-vector-icon.png" alt="" />
                        </div>
                        <Col xs={12} md={6} lg={6} className="meccafarm">
                            <div className="border-0" style={{padding: '20px', backgroundColor: '#1E1E20'}}>
                                <a href="https://design-with-val.vercel.app/"><img src="Rectangle 9551 (5).png" alt="" className="rounded-3"/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={6} className="madewithlove-section">
                            <div className="border-0" style={{padding: '20px', backgroundColor: '#1E1E20'}}>
                                <a href="https://george-s-collection.vercel.app/"><img src="Rectangle 9551 (4).png" alt="" className="rounded-3" /></a>
                            </div>
                        </Col>
                    </Row>

                    <Row className="row2-projectdescriptions">
                        <div className="project-vectors2">
                            <img src="play-icon.png" alt="" />
                            <img src="add-icon.png" alt="" />
                        </div>
                        <Col xs={12} md={6} lg={6} className="row2-firstproject">
                            <div className="border-0" style={{padding: '20px', backgroundColor: '#1E1E20'}}>
                                <a href="https://heiress-bookstore.vercel.app/"><img src="Rectangle 9551 (4).png" alt=""  className="rounded-3"/></a>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={6} className="madewithlove-section2">
                            <div className="border-0" style={{padding: '20px', backgroundColor: '#1E1E20'}}>
                                <a href="https://redesigning-chow-deck.vercel.app/"><img src="Rectangle 9551 (5).png" alt="" className="rounded-3"/></a>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>

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