import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO MY  <span className="purple"> PORTFOLIO </span>
            </h1>
            <p className="home-about-body" style={{ fontSize: "2.6em", lineHeight: "2.2" }}>
              I am a dedicated  <span className="purple"> Software Developer </span>
              with experience at <span className="purple"> Persistent Systems Pvt Ltd</span>
              , where I began my journey as a Software Engineer.
              <br />
              My expertise lies in <span className="purple">Java Enterprise Application Development </span>
              and <span className="purple">Web development</span>, and I have also delved into the world of Python.
              <br />
              I am showcasing my passion for <span className="purple">Creating Innovative Solutions </span>and my commitment to pushing the boundaries of Software Development.


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tawfeek01052002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/tawfeek-khan-1055421a9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tawfeeeek_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/TawfeekKhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
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
