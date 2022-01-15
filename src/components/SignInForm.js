import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignInForm = ({ values, errors, touched, isSubmitting }) => (
    <Container style={{ marginTop: '2rem' }}>
        <Row >
            <Col >
                <h1 className="mainheading">Sign In </h1>
            </Col>
        </Row>
        <Form>
            <Row style={{ marginTop: '2rem' }}>
                <Col xs={4}> <label>Email </label> </Col>
                <Col xs={8}>
                    <Field type="email" name="email" />
                    {touched.email && errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </Col>

            </Row>
            <Row style={{ marginTop: '2rem' }}>
                <Col xs={4}><label>Password</label> </Col>
                <Col xs={8}>
                    <Field type="password" name="password" />
                    {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </Col>


            </Row>

            <Row style={{ marginTop: '2rem' }}>
                <Col md={{ span: 4, offset: 4 }} xs={{span:4, offset: 4}}>
                    <button type="submit" disabled={isSubmitting} className="btn btn-dark  ">Submit</button>

                </Col>
            </Row>

        </Form>

    </Container>
)

const FormikSignInForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        }

    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Email is Required'),
        password: Yup.string().required('Password is Required'),
    }),
    handleSubmit(values, { props, setSubmitting }) {
      
        props.onSignIn(values);
        setSubmitting(false);
    }


})(SignInForm)
export default withRouter(FormikSignInForm);