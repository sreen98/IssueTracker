import React from "react";
import { Container, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Tittle = styled.h1`
  text-align: left;
  color: rgb(6, 50, 56);
  font-family: Georgia, sans-serif;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const AboutContainer = styled(Container)`
  margintop: 1rem;
`;

const aboutMessage =
  "This Application is used to track the status of the issues raised";

const About = () => {
  return (
    <AboutContainer>
      <Row>
        <Tittle>About</Tittle>
      </Row>
      <Row>
        {aboutMessage}
      </Row>
    </AboutContainer>
  );
};

export default withRouter(About);
