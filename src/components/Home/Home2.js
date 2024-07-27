import React from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import myImg from "../../Assets/avatar.png"; // Update the file extension to .png
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ paddingTop: 0, marginTop: 0 }}>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know More <span className="turquoise"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="turquoise"> React, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="turquoise">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="turquoise">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I'm also pursuing a B.Tech in Data Science and Artificial Intelligence. 
              &nbsp;B.Tech in Data Science and Artificial Intelligence
              MERN Stack Developer & Aspiring Blockchain Enthusiast
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="justify-content-center">
  <Col md={6} className="home-about-contact">
    <h1 style={{ color: "#FFC107" }}>GET IN TOUCH</h1>
    <p style={{ color: "#FF69B4" }}>
      Your Feedback <span style={{ color: "#33CC33" }}>Is Important</span> to me
    </p>
    <Tilt
      className="Tilt"
      options={{ max: 25, scale: 0.8 }}
      style={{ width: '100%' }}
    >
      <div
        className="Tilt-inner contact-card"
        style={{
          boxShadow: "0 0 10px rgba(0, 128, 128, 0.5)",
          borderRadius: "10px",
          padding: "20px",
          border: "1px solid #0097A7",
          background: "transparent",
          width: "80%",
          margin: "40px auto",
          textAlign: "left"
        }}
      >
        <Form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="877f29ad-1ea2-4783-a435-fbc96799c4ed" />
          <Form.Group controlId="formName">
            <Form.Label style={{ color: "#FFC107" }}>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name="name" style={{ borderColor: "#0097A7" }} />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label style={{ color: "#FFC107" }}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" name="email" style={{ borderColor: "#0097A7" }} />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label style={{ color: "#FFC107" }}>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter your message" name="message" style={{ borderColor: "#0097A7" }} />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Send Message
          </Button>
        </Form>
      </div>
    </Tilt>
  </Col>
</Row>

<Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="turquoise">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NayaKunal30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
