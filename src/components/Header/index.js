import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col>
            <Navbar light expand="lg">
              <NavbarBrand href="/">
                the<span>plan</span>board
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="menu" navbar>
                  <NavItem>
                    <NavLink href="/">Plan Your Event</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Start a planning Agency</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Help</NavLink>
                  </NavItem>
                  <NavItem className="auth-wrap">
                    <NavLink href="/">
                      <Button color="login rounded-pill">Login</Button>
                    </NavLink>
                    <NavLink href="/">
                      <Button color="sign-up rounded-pill">Sign up</Button>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
