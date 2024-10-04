import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              People know me as <b className="purple">Sonzai X シ</b> who provides tutorials and shares VPN accounts for free for a long time. I had stopped doing this, which is why I previously created and deleted a Telegram channel. I took a long break from this and started again in June 2023.
              <br />
              <br />
              I became known when I created a tutorial on how to install VPN Serverless ( VLESS Workers ). The number of people watching my videos on the channel reached thousands, and I am still doing this to make my Telegram channel members happy.
              <br />
              <br />
              That’s why I learned 
              <i>
                <b className="purple"> C++, Javascript, and Go.</b>
              </i>
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
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SonzaiEkkusu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sonzaix/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
