import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ContactCard from "./ContactCard";

function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading" style={{ marginBottom: "20px" }}>
                    <strong className="purple">Contact </strong>Details
                </h1>
                <ContactCard />
            </Container>
        </Container>
    );
}

export default Contact;
