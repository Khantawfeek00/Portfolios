import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    FaInstagram,
    FaHackerrank,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function ContactCard() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={6} md={6} lg={5} className="tech-icons">
                <h2>Personal Information</h2>
                <hr style={{ border: "1px solid" }} />
                <div className="p-3">
                    <h6>
                        Name -<span className="purple"> Tawfeek Khan</span>
                    </h6>
                    <h6>
                        Email -<span className="purple"> khantawfeek00@gmail.com</span>
                    </h6>
                    <h6>
                        {" "}
                        Date of Birth - <span className="purple"> May 1, 2002</span>
                    </h6>
                </div>
            </Col>
            <Col xs={6} md={6} lg={5} className="tech-icons">
                <h2>Coding Platforms</h2>
                <hr style={{ border: "1px solid" }} />

                <a
                    className="p-2"
                    href="https://github.com/Tawfeek01052002/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <FaGithub className="contactLinkIcon" />
                </a>
                <a
                    className="p-2"
                    href="https://leetcode.com/TawfeekKhan/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <SiLeetcode className="contactLinkIcon" />
                </a>
                <a
                    className="p-2"
                    href="https://auth.geeksforgeeks.org/user/user_8lk5"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <SiGeeksforgeeks className="contactLinkIcon" />
                </a>
                <a
                    className="p-2"
                    href="https://www.hackerrank.com/profile/khantawfeek00"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <FaHackerrank className="contactLinkIcon" />
                </a>
                <a
                    className="p-2"
                    href="https://www.codechef.com/users/tawfeek1234"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <SiCodechef className="contactLinkIcon" />
                </a>
            </Col>
            <Col xs={6} md={6} lg={5} className="tech-icons">
                <h2>Social Media</h2>
                <hr style={{ border: "1px solid" }} />
                <a
                    className="p-2"
                    href="https://www.linkedin.com/in/tawfeek-khan-1055421a9/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <FaLinkedin className="contactLinkIcon" />
                </a>
                <a
                    className="p-2"
                    href="https://www.instagram.com/tawfeeeek_?igsh=MXdkNzRnZW8yMGRhdA=="
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <FaInstagram className="contactLinkIcon" />
                </a>
            </Col>
        </Row>
    );
}

export default ContactCard;
