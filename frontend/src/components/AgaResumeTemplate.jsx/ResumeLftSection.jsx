import React, { Fragment } from 'react'
import "./resume.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPhone, FaHome, FaLinkedin } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ResumeLftSection() {
  return ( 
            <Container className="contact"style={{marginTop: "20px"}}>
               
                        <p className="contact-box text-center text-light  ">
                            <kbd>CONTACT </kbd>
                        </p>
                        <p className="phone text-center">
                            <FaPhone />
                            <br />
                            (630) 401-9430
                        </p>
                        <p itemType="text" className=" address text-center">
                            <FaHome />
                            <br />
                            2319 East Olive Street, Apt. 2F
                            <br />
                            Arlington Heights, IL 60004
                        </p>
                        <p className="text-center contact" >
                        <kbd>EDUCATION</kbd>
                        </p>
        
                        <h6>  <p className='education text-center contact' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            Professional Diploma
                        </p></h6><h6 className='education-text one'> Wisconsin University of Madison</h6>
                        <p className="education-text">Software Development</p>
                        <p className="education-text">04/2022 - 12/2022</p>

                        <h6>  <p className='education text-center' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            Professional Diploma
                        </p></h6><h6 className='education-text one'> The Aquarius Institute</h6>
                        <p className="education-text">Ultrasound</p>
                        <p className="education-text">2013 - 2015</p>

                        <h6>  <p className='education text-center' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            Associates Level
                        </p></h6><h6 className='education-text one'> Hofstra University</h6>
                        <p className="education-text">Psychology</p>
                        <p className="education-text">2006 - 2009</p>

                        <h6>  <p className='education text-center' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            College Credits
                        </p></h6><h6 className='education-text one'>Technical University of Koszalin (Poland)</h6>
                        <p className="education-text">Computer Engineering</p>
                        <p className="education-text">1993 - 1995</p>

                        <h6>  <p className='education text-center' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            High School Diploma
                        </p></h6><h6 className='education-text one'>School Complex No.2  (Poland)</h6>
                        <p className="education-text">Building Engineering Documentation</p>
                        <p className="education-text">1988 - 1993</p>

                        <h6>  <p className='education text-center' style={{fontStyle: 'italic', color: 'goldenrod', marginTop: '15px', marginBottom: '1px'}}>
                            High School Diploma
                        </p></h6><h6 className='education-text one'>Technical University of Koszalin (Poland)</h6>
                        <p className="education-text">Computer Engineering</p>
                        <p className="education-text">1993 - 1995</p>
                    {/* </Col>
                    </Row> */}
                    {/* <Row>
                    <Col xs={4} className="contact  "> */}
                        <p className="contact-box text-center text-light  ">
                            <kbd>SOFT SKILLS </kbd> </p>
                        <p className="softSkills">Eager to learn new Technologies</p>
                        <p className="softSkills">Critical thinking</p>
                        <p className="softSkills">Creativity</p>
                        <p className="softSkills">Detail oriented</p>
                        <p className="softSkills">Problem solving</p>
                        <p className="softSkills">Positive</p>
                        <p className="softSkills ">Time management</p>
                        <p className="softSkills">Active listening</p>
                        <p className="softSkills two">Innovative solutions</p> 
                    {/* </Col>
                    </Row> */}
                    {/* <Row>
                    <Col xs={4} className="contact  "> */}
                        <p className="contact-box text-center text-light  ">
                            <kbd>LANGUAGES </kbd> </p>
                        <p className="language">English</p>
                        <ProgressBar className="language" animated now={95} />
                        <p className="language">Polish (Native)</p> 
                        <ProgressBar className="two" animated now={100} />
                    {/* </Col>
                    
                </Row> */}
             </Container>
        // </Fragment>
   
   
   
   
   
   
   
    
  )
}