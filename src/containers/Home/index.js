import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import Header from "../../components/Header";
import "./Home.scss";
import { features } from "./fixtures";

const Home = (props) => {
  const renderHero = () => (
    <section className="hero">
      <Container>
        <Row>
          <Col className="header-title">
            <h4 className="md-title">Plan. Organize. Tracks</h4>
            <h1 className="xl-title">A new way to manage your events</h1>
          </Col>
        </Row>
      </Container>
      <Container className="hero-form__wrap">
        <img
          className="illustration-left"
          src="/images/illustration-left.svg"
          alt=""
        />
        <img
          className="illustration-right"
          src="/images/illustration-right.svg"
          alt=""
        />
        <Row className="justify-content-center">
          <Col md="5">
            <Form className="hero-form">
              <FormGroup>
                <Label for="exampleEmail">Name Your Event</Label>
                <Input
                  type="name"
                  name="text"
                  id="exampleEmail"
                  placeholder="My graduation party"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Event Type</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Select</option>
                  <option>item 1</option>
                  <option>item 2</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Your Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="examplePassword"
                  placeholder="To tracking Your Event"
                />
              </FormGroup>
              <FormGroup className="text-center">
                <Button className="rounded-pill">Plan Your Event</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );

  const renderSlider = () => (
    <section className="slider">
      <Container className="">
        <Row className="row-eq-height">
          <Col lg="5" className="slider__content">
            <div>
              <h2 className="lg-title">
                Create Dashboards <br />& Stay in control
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididu.
              </p>
            </div>
          </Col>
          <Col lg="7">
            <div className="slider__hero">
              <img src="/images/dashboard.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );

  return (
    <main className="home">
      <img className="top-circle" src="images/top-circle.svg" alt="" />
      <Header />
      {renderHero()}
      {renderSlider()}
      <section className="features">
        <Container>
          <Row className="row-eq-height justify-content-center">
            <Col lg="12" className="title__wrap">
              <h2 className="lg-title">Features</h2>
            </Col>
            {features.map((item, index) => (
              <Col key={index} lg="4" className="features__card">
                <img src={`/images/${item.imgSrc}.svg`} alt="" />
                <h6 className="sm-title">{item.label}</h6>
                <p>{item.text}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
