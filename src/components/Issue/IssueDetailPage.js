import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Row, Col, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap';
import * as userActions from '../../actions/userActions';


class IssueDetail extends React.Component {
  constructor(props) {
    super(props);
    this.checkLogin(props.history);
  }

  getIssueDetail = (issue) => {
    let issueid = this.props.match.params.id;
    let tempissue = this.props.issues.filter(issue => issue.id == issueid);
    return (tempissue[0]);
  }

  checkLogin(history) {
    let authenticated = this.props.login;
    if (!authenticated) {
      window.alert("You have to Sign in to View Details")
      history.push('/signin');
    }

  }
  render() {
    let issue = [];
    (this.props.issues.length != 0) && (issue = this.getIssueDetail(issue));
    return (
      <Container style={{}} >
        <Row>
          <Col lg={{offset:3,span:5}}>
         
          <Card style={{
            margin: '1rem',
            padding: '2rem',
            textAlign: 'center',
            alignContent: 'center'

          }} bg="light"
            border="dark"
          >
            <Card.Title>
              Issue
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroupItem>Type: {issue.type}</ListGroupItem>
              <ListGroupItem>Description: {issue.issuedesc}</ListGroupItem>
              <ListGroupItem>Severity: {issue.severity}</ListGroupItem>
              <ListGroupItem>Status : {issue.status}</ListGroupItem>
              <ListGroupItem>Created date : {issue.createdDate}</ListGroupItem>
              <ListGroupItem>Resolved date : {issue.resolvedDate}</ListGroupItem>
            </ListGroup>
            <Card.Footer >
              <Link to="/"><Button className="primary" style={{ alignSelf: 'center' }}>Back</Button></Link>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issues,
    login: state.login
  };
}



export default connect(mapStateToProps, null)(withRouter(IssueDetail));
