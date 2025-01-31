import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './heiress.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical';
import { Link, useNavigate } from 'react-router-dom';
import Projects from './projects';

export default function Myportfolio () {
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
                    <Row >
                        <Col xs={6} md={6} lg={6}>
                            <img src="heiress'-logo.png" alt="" height={40} />
                        </Col>

                        <Col className='d-none d-md-none d-lg-block' lg={6}>
                            <ul className='top-navs'>
                                <li><Link to='/' className='active'>Home</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
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

                    <Row className='hero-section-home'>
                        <Col xs={12} md={12} lg={6}>
                            <div>
                                <ul className='social-icons'>
                                    <li><a href=""><img src="devicon_linkedin.png" alt="" /></a></li>
                                    <li><a href=""><img src="facebook-icon.png" alt="" /></a></li>
                                    <li><a href=""><img src="whatsapp-icon.png" alt="" /></a></li>
                                    <li><a href=""><img src="twitter icon.png" alt="" /></a></li>
                                </ul>

                                <div className='typescript'>
                                    <h1 className='frontend-title'>
                                        <Typical steps={['I’m  a Frontend Dev', 10000, 'I, Code. Debug. Deploy!', 5000]} loop={Infinity} wrapper="span" typeSpeed={5000} deleteSpeed={50}/>
                                    </h1>
                                    
                                    <div className='d-none d-lg-flex'>
                                        <p className="frontend-description">I specialize in crafting seamless and responsive websites that merge creativity with functionality. Every line of code I write is aimed at bringing ideas to life and delivering exceptional user experiences.</p>
                                    </div>
                                    
                                    <div className='hero-btn d-none d-lg-flex'>
                                        <Button style={{backgroundColor: '#5454D4'}} className='border-0'><Link to='/contact'><img src="let's-talk-icon.svg" alt="" height={25}/></Link></Button>
                                        <Button style={{backgroundColor: 'white', color: '#5454D4'}} className='border-0'><a href="My Resume.pdf">My Resume</a></Button>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={12} lg={6} className='comp-code'>
                            <div className='vector-parent'>
                                <img src="portfolio-codeimg-2.jpg" alt="" />
                                <img src="first-vector-icon.png" alt="" />
                                <img src="circle-icon.png" alt="" />
                                <img src="play-icon.png" alt="" />
                                <img src="add-icon.png" alt="" />
                            </div>
                        </Col>

                        <Col xs={12} md={12} className='d-lg-none d-block text-center'>
                            <div>
                                <p className="frontend-description" style={{color: 'white', marginTop: '50px'}}>I specialize in crafting seamless and responsive websites that merge creativity with functionality. Every line of code I write is aimed at bringing ideas to life and delivering exceptional user experiences.</p>
                            </div>
                        </Col>
                        
                        <div className='hero-btn d-lg-none d-flex'>
                            <Button style={{backgroundColor: '#5454D4'}} className='border-0'><img src="let's-talk-icon.svg" alt="" height={25}/></Button>
                            <Button style={{backgroundColor: 'white', color: '#5454D4'}} className='border-0'>My Resume</Button>
                        </div>
                        
                    </Row>
                </Container>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col xs={6} md={12} lg={6} className='offset-1 offset-lg-0'>
                            <div className='myimage'>
                                <img src="my-photoframe.png" alt="" className='mypicsframe'/>
                                <img src="my-picture.png" alt="" className='mypics'/>
                                <img src="play-icon.png" alt=""  height={40}/>
                            </div> 
                        </Col>

                        <Col xs={12} md={12} lg={6}>
                            <div className='about-me'>
                                <h2>About Me</h2>
                                <p>Hi, I’m Success, a passionate Front-End Developer with a knack for turning ideas into engaging digital experiences. I specialize in creating clean, responsive, and user-friendly websites that bring creativity and functionality together. Whether it’s crafting sleek interfaces or solving technical challenges, I’m driven by a commitment to delivering excellence in every project I take on.</p>
                                <div className='text-end' style={{marginTop: '-30px'}}>
                                    <img src="circle-icon.png" alt="" height={20}/>
                                </div>                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            
            <article>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <h3 className='text-center' style={{color: 'white'}}>Services</h3>
                        </Col>
                    </Row>
                    <Row className='myservices'>
                        <Col xs={12} md={6} lg={6} className='text-center mb-3'>
                            <img src="/services-blue.png" alt="" />
                            <div className='text-center'>
                                <h4>Website Development</h4>
                                <p>I create dynamic websites using Html. CSS. Java script, React, Type script</p>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={6} className='text-center mb-3'>
                            <img src="/services-red.png" alt="" />
                            <div>
                                <h4 className='text-center'>UI/UX Design Implementation</h4>
                                <p className='text-center'>I Transform UI/UX design mockups (from tools like Figma, Sketch, or Adobe XD) into functional web pages with responsive design principles.</p>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={6} className='text-center mb-3'>
                            <img src="/services-red.png" alt="" />
                            <div>
                                <h4 className='text-center'>Custom Front-End Development</h4>
                                <p className='text-center'>I Tailor solutions for specific industries, including eCommerce, SaaS platforms, and landing pages.</p>
                            </div>
                        </Col>

                        <Col xs={12} md={6} lg={6} className='text-center mb-3'>
                            <img src="/services-blue.png" alt="" />
                            <div>
                                <h4>Version Control and Deployment</h4>
                                <p>I Use tools like Git, GitHub, Vercel, or Netlify for smooth versioning and deployment.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </article>

            <summary>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12} className='text-center'>
                            <h4>Projects</h4>
                        </Col>
                    </Row>
                    <Row className='project-images'>
                        <Col xs={12} md={6} lg={4} className='text-center text-md-none'>
                            <div>
                                <a href="https://design-with-val.vercel.app/"><img src="Rectangle 9551 (4).png" alt="" /></a>
                            </div>  
                        </Col>

                        <Col xs={12} md={6} lg={4} className='text-center text-md-none'>
                            <div>
                                <a href="https://george-s-collection.vercel.app/"><img src="george's-collection.png" alt="" /></a>
                            </div>  
                        </Col>

                        <Col xs={12} md={6} lg={4} className='text-center text-md-none'>
                            <div>
                                <a href="https://redesigning-chow-deck.vercel.app/"><img src="Rectangle 9551 (6).png" alt="" /></a>
                            </div>  
                        </Col>

                        <Col xs={12} md={12} lg={12} className='text-center mt-5 mb-5'>
                            <Button style={{backgroundColor: '#5454D4'}} className='border-0'><Link to= '/projects' style={{color: 'white', textDecoration: 'none'}}>View all</Link></Button>
                        </Col>
                    </Row>
                </Container>
            </summary>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className='section-vector'>
                                <h4 className='text-center'>Let’s talk for the service you want to use </h4>
                                <img src="play-icon.png" alt=""  />
                                <img src="circle-icon.png" alt="" />
                            </div>  
                        </Col>

                        <Col xs={12} md={12} lg={12} className='text-center mb-5'>
                            <Button style={{backgroundColor: '#5454D4'}} className='border-0'><Link to='/contact' style={{color: 'white', textDecoration: 'none'}}>Contact Me</Link></Button>
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
