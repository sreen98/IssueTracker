import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';


const EditIssueForm = ({ values, errors, touched, isSubmitting }) => (

    <Container>
        <h1 className="mainheading">Edit Issue</h1>
        <Form>
            <Row>
                <Col xs={4}><label>
                    Type</label></Col>

                <Col>
                    <Field type="text" name="type" />
                    {touched.type && errors.type && <span style={{ color: 'red' }}>{errors.type}</span>}
                </Col>

            </Row>
            <br />

            <Row>
                <Col xs={4}>
                    <label>
                        Description
                    </label>
                </Col>
                <Col>
                    <Field type="text" name="issuedesc" />
                    {touched.issuedesc && errors.issuedesc && <span style={{ color: 'red' }}>{errors.issuedesc}</span>}
                </Col>
            </Row>

            <br />


            <Row>
                <Col xs={4}>
                    <label>Severity</label>
                </Col>
                <Col>
                    <Field name="severity" as="select" >

                        <option value="Minor" label="Minor" />

                        <option value="Major" label="Major" />

                        <option value="Critical" label="Critical" />

                    </Field>
                </Col>
            </Row>
            <br />


            <Row >
                <Col xs={4}>
                    <label>Status:</label>
                </Col>
                <Col>
                    <label>
                        <Field type="radio" name="status" value="Open" />
                    Open
                </label>
                    <label>
                        <Field type="radio" name="status" value="In Progress" />
                In Progress
                </label>
                    <label>
                        <Field type="radio" name="status" value="Closed" />
                Closed
                </label>
                </Col>


            </Row>
            <br />

            <Row>
                <Col xs={4}><label>Created Date: </label></Col>

                <Col>
                    <Field type="date" name="createdDate" />
                    {touched.createdDate && errors.createdDate && <span style={{ color: 'red' }}>{errors.createdDate}</span>}
                </Col>
            </Row>
            <br />
            <Row>
                <Col xs={4}>
                    <label>Resolved Date: </label>
                </Col>
                <Col>
                    <Field type="date" name="resolvedDate" />
                </Col>
            </Row>
            <br />

            <Row>
                <Col xs={{ offset: 4 }}>
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Col>
            </Row>
            <Prompt when={!isSubmitting} message="Are you sure you want to leave ?" />

        </Form>
    </Container>
)

const FormikEditIssueForm = withFormik({
    mapPropsToValues({ issuedesc, status, severity, type, createdDate, resolvedDate, props }) {
        return {
            issuedesc: issuedesc,
            severity: severity,
            status: status,
            type: type,
            createdDate: createdDate,
            resolvedDate: resolvedDate


        }
    },
    validationSchema: Yup.object().shape({
        issuedesc: Yup.string().required('Issue Description is required'),
        type: Yup.string().required('Type is required'),
        createdDate: Yup.string().required('Create Date is Required')


    }),
    handleSubmit(values, { props, setSubmitting }) {

        props.onSaveEdit(values, props.id);
        setSubmitting(false);

    }
})(EditIssueForm)

export default FormikEditIssueForm;
