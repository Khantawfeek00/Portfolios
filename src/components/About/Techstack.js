import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiCplusplus,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiApachemaven,
  SiExpress,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiSpringboot
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker/>
        <h6>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes/>
        <h6>Kubernetes</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <h6>SpringBoot</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <h6>Maven</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h6>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>Javascript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <h6>C++</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>ReactJS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h6>Express</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
