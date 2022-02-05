import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const RegisterFormContainer = styled(Container)`
  margin-top: 25px;
`;
const Title = styled.h1`
  margin-left: 25px;
`;

const StyledRow = styled(Row)`
  margin-top: 1rem;
`;
const heading = "Registration Form";

const RegisterFrom1 = ({ values, errors, touched, isSubmitting }) => (
  <RegisterFormContainer>
    <Row>
      <Col>
        <Title className="mainheading">{heading}</Title>
      </Col>
    </Row>
    <Form>
      <StyledRow>
        <Col xs={4}>
          {" "}
          <label>Email </label>{" "}
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
        <Col xs={4}>
          {" "}
          <label>First Name</label>
        </Col>
        <Col xs={8}>
          <Field type="text" name="firstName" />
        </Col>
      </StyledRow>

      <StyledRow>
        <Col xs={4}>
          {" "}
          <label>Last Name: </label>
        </Col>
        <Col xs={8}>
          <Field type="text" name="lastName" />
        </Col>
      </StyledRow>
      <StyledRow>
        <Col xs={4}>
          <label> Location:</label>{" "}
        </Col>
        <Col xs={8}>
          <Field type="text" name="loc" />
        </Col>
      </StyledRow>

      <StyledRow>
        <Col xs={4}>
          <label>Mobile Number</label>{" "}
        </Col>
        <Col xs={8}>
          <Field type="tel" name="mobileNumber" />
          {touched.mobileNumber && errors.mobileNumber && (
            <span style={{ color: "red" }}>{errors.mobileNumber}</span>
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
  </RegisterFormContainer>
);

const FormikRegisterForm1 = withFormik({
  mapPropsToValues({
    email,
    password,
    firstName,
    lastName,
    loc,
    mobileNumber,
  }) {
    return {
      email: email || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      loc: loc || "",
      mobileNumber: mobileNumber || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
    mobileNumber: Yup.string().required("Mobile Number is required"),
  }),
  handleSubmit(values, { props, setSubmitting }) {
    props.onSaveUser(values);
    setSubmitting(false);
  },
})(RegisterFrom1);
export default withRouter(FormikRegisterForm1);
