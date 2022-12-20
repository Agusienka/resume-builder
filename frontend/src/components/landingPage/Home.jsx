import React from "react";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
// import './landing.css'
import { Typewriter } from 'typewriter-effect';
import { introdata, meta } from "../../content_option";



function Home() {
  return (
    <>
    <Container>
      <Row>
      <Col className="h_bg-image order-1 order-lg-2 h-100 ">
        <div 
         style={{backgroundImage: `url('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')`}}>
        </div>
      </Col>
      <Col >
      <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  /></Col>
      </Row>

    </Container>
    </>
  );
}
export default Home
