import React from "react";
import {
  NavbarBrand,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg="3">
            <NavbarBrand href="/">
              the<span>plan</span>board
            </NavbarBrand>
          </Col>
          <Col lg="7">
            <div className="links">
              <ul>
                <h6>Dashboard</h6>
                <li>Users</li>
                <li>Calendar</li>
                <li>Bills</li>
                <li>Settings</li>
              </ul>
              <ul>
                <h6>Account</h6>
                <li>Login</li>
                <li>Register</li>
                <li>Settings profile</li>
              </ul>
              <ul>
                <h6>Agents</h6>
                <li>Monitoring</li>
                <li>Collaborating</li>
                <li>Invoice</li>
              </ul>
            </div>
          </Col>
          <Col lg="2">
            <div className="social">
              <div className="social-inner">
                <img src="images/facebook.svg" alt="" />
                <img src="images/twitter.svg" alt="" />
                <img src="images/youtube-play.svg" alt="" />
                <img src="images/mail.svg" alt="" />
                <img src="images/instagram.svg" alt="" />
              </div>
              <p>Copyright 2019</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
