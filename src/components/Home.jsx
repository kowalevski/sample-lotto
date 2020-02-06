import React from 'react';
import {
  Container,
  Row,
  Navbar,
  Nav,
  Card,
  FormCheck,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Scorecard from './Scorecard';

const Home = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Scorecard />
        </Row>
        <br />
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>Theme</Card.Header>
              <Card.Body>
                <Row>
                  <Col md="2">
                    <FormCheck type="radio" label="Light" id="light" />
                  </Col>
                  <Col md="2">
                    <FormCheck type="radio" label="Dark" id="dark" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

/*
Home.propTypes = {
  user: PropTypes.objectOf({
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
  }).isRequired
}; */

export default Home;
