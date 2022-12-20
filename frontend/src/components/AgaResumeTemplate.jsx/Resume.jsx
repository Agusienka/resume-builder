import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./resume.css";
import ResumeLftSection from "./ResumeLftSection"
import ResumeRtSection from "./ResumeRtSection";

// const divStyle = {
//     marginLeft: '0',

// };



export default function Resume() {
    return (
        
     
        <Container  style={{marginLeft: '0px'}} className="main-section ">
        <Row >
         <Col md={{span: 4 }} className="left-section" >
            <ResumeLftSection />
            </Col>
            <Col md={{span: 8}} className="right-section">
            <ResumeRtSection/>
            </Col>
            </Row>
     
       
       
        
           
            </Container>
     
    );
}