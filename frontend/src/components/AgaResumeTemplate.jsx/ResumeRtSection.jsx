import React, { Fragment } from "react";
import "./resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";





export default function ResumeRtSection() {
  return (
            <Container style={{marginTop: "15px"}}>
          
                        <h5  style={{color: 'white', marginTop: '10px'}} className=" profile shadow-lg p-1 mb-8 bg-dark rounded">PROFILE</h5>
                        <p className="profile-text">Upcoming software development program graduate with fundamental knowledge of software design, development, and testing. Seeking to utilize educational background with great analytical, technical, and programming skills. Able to work in both team and self-directed settings. Seeking a full-time position to deliver solutions to business needs. My work experience in clinical healthcare marked by significant workplace diversity thought me adaptability, sensitivity to new perspectives, ability to learn and grow as well as being an innovative communicator in varying situations. The outcome was a satisfied diverse customer base. 
                        </p>
                        <div class="detail">
                            <div className="detailSection edu">
                                <div className="detailTitle">
                                    <div className="titleIcon">
                                     <i class="fas fa-user-graduate"></i>
                                    </div>
                                    <span>EXPERIENCE</span>
                                 </div>
                            <div/>
                            <div className="detailContent">
                                <div className="timelineBlock">
                                <h1>Department of Computer Science</h1>
                                <p>National Tsing Hua University, Taiwan</p>
                                <time>2015 - 2019</time>
                             </div>
                        <div class="timelineBlock">
                             <h1>Institute of Computer Science and Engineering</h1>
                             <p>National Chiao Tung University, Taiwan</p>
                           <time>2020 - present</time>
                        </div>
                        </div>
                        </div>
                        </div>
      
             
        </Container>
      



  )
}
