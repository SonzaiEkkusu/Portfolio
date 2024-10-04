import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edtunel from "../../Assets/Projects/edtunel.png";
import other from "../../Assets/Projects/other.png";
import revanced from "../../Assets/Projects/revanced.png";
import v2raydumper from "../../Assets/Projects/v2raydumper.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading"><strong className="purple">Repository</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few repository I've maintained on github.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={v2raydumper}
              isBlog={false}
              title="V2RayDumper"
              description={
                <div style={{ textAlign: "left" }}>
                  V2RayDumper is a powerful tool designed to extract V2Ray account details from Telegram channels.
                </div>
              }
              ghLink="https://github.com/SonzaiEkkusu/V2RayDumper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edtunel}
              isBlog={false}
              title="EDTunnel"
              description={
                <div style={{ textAlign: "left" }}>
                Use Cloudflare pages and worker serverless to implement VLESS protocol
                </div>
              }
              ghLink="https://github.com/SonzaiEkkusu/EDtunnel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={revanced}
              isBlog={false}
              title="Revanced Module Magisk"
              description={
                <div style={{ textAlign: "left" }}>
                Extensive ReVanced builder. to Build Youtube Apps Mod. Updated daily.
                </div>
              }
              ghLink="https://github.com/SonzaiEkkusu/revanced-magisk-module"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={other}
              isBlog={false}
              title="Other"
              description={
                <div style={{ textAlign: "left" }}>
                For other repository code just visit my github.
                </div>
              }
              ghLink="https://github.com/SonzaiEkkusu"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
