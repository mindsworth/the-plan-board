import React from "react";
import {
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="footer-inner">
            <NavbarBrand href="/">
              the<span>plan</span>board
            </NavbarBrand>
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
            <div className="social">
              <div className="social-inner">
                <img src="/images/facebook.svg" alt="" />
                <img src="/images/twitter.svg" alt="" />
                <img src="/images/youtube-play.svg" alt="" />
                <img src="/images/mail.svg" alt="" />
                <img src="/images/instagram.svg" alt="" />
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
