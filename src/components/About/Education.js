import React from "react";
import { Col, Row } from "react-bootstrap";

import { MdEngineering, MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function Education() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={3} md={2} className="tech-icons">
                <div class="card_">
                    <FaSchool />
                    <h5>SSC</h5>
                    <h6><span>Year - </span> 2016-2017</h6>
                    <h6>School - Samarth Vidyalaya Lakhani</h6>
                    <hr></hr>
                    <h6>Percentage - 79.80%</h6>
                </div>
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <div class="card_">
                    <MdSchool />
                    <h5>HSC</h5>
                    <h6><span>Year - </span> 2018-2019</h6>
                    <h6>College - Samarth Jr Science College Lakhani</h6>
                    <hr></hr>
                    <h6>Percentage - 78.23%</h6>
                </div>
            </Col>
            <Col xs={3} md={2} className="tech-icons">
                <div class="card_">
                    <MdEngineering />
                    <h5>BE in Information Technology</h5>
                    <h6><span>Year - </span> 2019-2023</h6>
                    <h6>College - Yeshwantrao Chavan College of Engineering</h6>
                    <hr></hr>
                    <h6>CGPA - 8.4</h6>
                </div>
            </Col>

        </Row >
    );
}

export default Education;
