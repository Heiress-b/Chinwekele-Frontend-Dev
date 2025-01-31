import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './heiress.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function About () {
    const [menuVisible, setMenuVisible] = useState(false); // Track menu state

  const handleMenuClick = () => {
    setMenuVisible(true); // Show menu
  };

  const handleCloseClick = () => {
    setMenuVisible(false); // Hide menu
  };
    
    return (
        <>
            <header style={{position: 'relative'}}>
                <Container>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            <img src="heiress'-logo.png" alt="" height={40} />
                        </Col>

                        <Col className='d-none d-md-none d-lg-block' lg={6}>
                            <ul className='top-navs'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/about' className='active'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </Col>

                        <Col className='d-lg-none d-flex justify-content-end links' xs={6} md={6}>
                            <ul id="lists" style={{top: menuVisible ? "90px" : "-300px"}}>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/projects'>Projects</Link></li>
                                <li><Link to='/about' className='active'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                            <img src="hamburger-icon.svg" alt=""  id="menu" style={{ display: menuVisible ? "none" : "block" }} onClick={handleMenuClick}/>
                            <i className="bi bi-x" id="close" style={{ display: menuVisible ? "block" : "none" }} onClick={handleCloseClick}></i>
                        </Col>
                        
                    </Row>
                    
                    <Row className="hero-section">

                        <Col xs={12} md={12} lg={8}  className='offset-lg-2' style={{paddingBottom: '100px'}}>
                            <p style={{color: 'white'}} className="text-center quote">"....turning creative visions into functional and visually striking digital solutions."</p>
                        </Col>

                        <Col xs={6} md={12} lg={6} className='offset-1 offset-lg-0'>
                            <h2 style={{color: 'white'}} className="d-lg-none d-block d-flex justify-content-center">About Me</h2>
                            <div className='myimage pb-3'>
                                <img src="my-photoframe.png" alt="" className='mypicsframe'/>
                                <img src="my-picture.png" alt="" className='mypics'/>
                                <img src="play-icon.png" alt=""  height={40}/>
                            </div> 
                        </Col>

                        <Col xs={12} md={12} lg={6}>
                            <div className='about-me'>
                                <h2 style={{color: 'white'}} className="d-none d-lg-block">About Me</h2>
                                <p style={{color: 'white'}}>Hi, I’m Success, a passionate Front-End Developer with a knack for turning ideas into engaging digital experiences. I specialize in creating clean, responsive, and user-friendly websites that bring creativity and functionality together.    </p>
                                <p style={{color: 'white'}}>Whether it’s crafting sleek interfaces or solving technical challenges, I’m driven by a commitment to delivering excellence in every project I take on.  With expertise in HTML5, CSS3, JavaScript, React.js, and Bootstrap, I bring creative ideas to life while ensuring seamless functionality across all devices. </p>
                                <p style={{color: 'white'}}>I thrive on solving problems through code and transforming designs into interactive digital experiences. I’m always eager to learn and stay updated with the latest technologies, ensuring that the solutions I build align with modern web standards and trends. I prioritize communication, attention to detail, and efficiency to bring projects to successful completion. </p>
                                <p style={{color: 'white'}}>When I’m not coding, you can find me exploring new design inspirations, experimenting with emerging tools, or contributing to projects that challenge me to grow further as a developer.</p>
                                <div className='text-end' style={{marginTop: '-30px'}}>
                                    <img src="circle-icon.png" alt="" height={20}/>
                                </div>                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            <main>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={12} className='text-center'>
                            <h4 style={{color: 'white'}}>Frameworks Proficient In</h4>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="html5.png" alt="" />
                                <h5>HTML5</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="css3.png" alt="" />
                                <h5>CSS3</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="Js.png" alt="" />
                                <h5>Javascript</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="github.png" alt="" />
                                <h5>Github</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="react.png" alt="" />
                                <h5>React</h5>
                            </div>
                            
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="bootstap.png" alt="" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="git.png" alt="" />
                                <h5>Git (Version Control)</h5>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="frameworks text-center">
                                <img src="tailwind.png" alt="" />
                                <h5>Tailwind</h5>
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
                    <Row className="myservices">
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
