import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SignInFormContainer = styled(Container)`
  margin-top: 25px;
`;
const Title = styled.h1`
  margin-left: 50px;
`;
const StyledRow = styled(Row)`
  margin-top: 2rem;
`;
const heading = "Sign In";

const SignInForm = ({ values, errors, touched, isSubmitting }) => (
  <SignInFormContainer>
    <Row>
      <Col>
        <Title className="mainheading">{heading}</Title>
      </Col>
    </Row>
    <Form>
      <StyledRow>
        <Col xs={4}>
          <label>Email </label>
        </Col>
        <Col xs={8}>
          <Field type="email" name="email" />
          {touched.email && errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={4}>
          <label>Password</label>{" "}
        </Col>
        <Col xs={8}>
          <Field type="password" name="password" />
          {touched.password && errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </Col>
      </StyledRow>

      <StyledRow>
        <Col md={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-dark  "
          >
            Submit
          </button>
        </Col>
      </StyledRow>
    </Form>
  </SignInFormContainer>
);

const FormikSignInForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  }),
  handleSubmit(values, { props, setSubmitting }) {
    props.onSignIn(values);
    setSubmitting(false);
  },
})(SignInForm);
export default withRouter(FormikSignInForm);
