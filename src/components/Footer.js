import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Tawfeek Khan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} TK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Tawfeek01052002"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="www.linkedin.com/in/tawfeek-khan-1055421a9"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/tawfeeeek_/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <AiOutlineInstagram />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/TawfeekKhan/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
