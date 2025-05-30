import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon2 from "../assets/img/nav-icon2.svg"; // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg"; // Gmail or any other link

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/anmol-singh-240514269" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/anmol-singh" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
            <p>Copyright 2024 All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
