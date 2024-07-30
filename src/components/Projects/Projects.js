import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GameZone from "../../Assets/Projects/GameZone.png";
import QuickBank from "../../Assets/Projects/QuickBank.png";
import Medpulseai from "../../Assets/Projects/medpulseai.png";
import CyberBlock from "../../Assets/Projects/CyberBlock.png";
import PredictMed from "../../Assets/Projects/PredictMed.png";
import CropMate from "../../Assets/Projects/CropMate.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="turquoise">  Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Medpulseai}
              isBlog={false}
              title="MedPulseAI"
              description="MedPulseAI is an innovative health-tech platform harnessing the power of machine learning to empower individuals to take control of their well-being."
              ghLink="https://github.com/NayaKunal30/MedPulseAI---ML"
              demoLink="https://medpulseai-2lyq.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CropMate}
              isBlog={false}
              title="CropMate"
              description="Crop Mate is designed to assist farmers and gardeners in determining the optimal amount of seeds required for their crops. By analyzing the area of the land and the seed density, users can make informed decisions to maximize their yield while minimizing waste."
              ghLink="https://github.com/NayaKunal30/CropMate"
              demoLink="https://cropmate-7ovw.onrender.com/"
      
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuickBank}
              isBlog={false}
              title="QuickBank"
              description="QuickBank, a modern, React-based application designed for seamless UI/UX in online banking. Explore intuitive interfaces, real-time updates, and responsive design for a next-generation banking experience."
              ghLink="https://github.com/NayaKunal30/QuickBank-Kunal"
              demoLink="https://quick-bank-kunal.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GameZone}
              isBlog={false}
              title="GameZone"
              description=" GameZone: A Fun-Filled Gaming Hub! is a React-based web application where users can enjoy a variety of games, including Math Games, Car Games, Tic Tac Toe, and Rock Paper Scissors. Built with Next.js and styled with CSS for a seamless and responsive user experience."
              ghLink="https://github.com/NayaKunal30/GameZone-Js"
              demoLink="https://game-zone-js.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CyberBlock}
              isBlog={false}
              title="Cyber Block"
              description="Cyber Block is a Website that Deals with Spam-Emails-Detector and also Provides Quizzes and News Related to Cyber Security, A Report Form that You can fill to report your fraud so that it can be sent to Concerned Authority , without any panic."
              ghLink="https://github.com/NayaKunal30/CYBER-BLOCK-MAKSQUARE"
              demoLink="https://nayakunal30.github.io/CYBER-BLOCK-MAKSQUARE/"
      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PredictMed}
              isBlog={false}
              title="PredictMed"
              description="The idea is to develop a website that offers predictive health analytics for conditions like diabetes, heart disease, and brain cancer, while also providing nearby hospital and clinic information for emergency situations."
              ghLink="https://github.com/NayaKunal30/PredictMED"
              demoLink="https://predictmed-ytj7.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
