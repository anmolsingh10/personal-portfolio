import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Virtual Private Cloud (VPC)",
      description: "Designed and implemented a Virtual Private Cloud (VPC) with public and private subnets, deployed web servers, managed MySQL database, configured Load Balancer with SSL, and set up auto-scaling for high availability.",
      imgUrl: projImg1,
    },
    {
      title: "Clone of Charles Tyrwhitt Website",
      description: "Developed a front-end clone of the Charles Tyrwhitt website using HTML, CSS, and JavaScript, ensuring responsiveness and optimized performance for a seamless user experience.",
      imgUrl: projImg2,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the key projects I have worked on, showcasing my skills in cloud computing, web development, and full-stack engineering.</p>
                <Row>
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
