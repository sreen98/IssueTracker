import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as issueActions from "../actions/issueActions";
import AddIssueForm from "./AddIssueForm";
import { Container, Row, Col } from "react-bootstrap";

class AddIssuePage extends React.Component {
  constructor(props) {
    super(props);
    this.checkLogin(props.history);
    this.state = {
      token: false,
    };
  }
  componentDidMount() {
    this.setState({token:sessionStorage.getItem("token")});
  }
  checkLogin(history) {
    let authenticated = this.props.login;
    if (!authenticated) {
      window.alert("You have to Sign in to Add Issue");
      history.push("/signin");
    }
  }

  saveIssue = (issue) => {
    issue.views = 0;
    this.props.actions
      .addIssue(issue)
      .then(() => {
        window.alert("Issue Added");
        this.props.history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ offset: 1, span: 8 }}>
            <AddIssueForm onSave={this.saveIssue} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issues,
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(issueActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddIssuePage));
