import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";
import RegisterForm from "./RegisterForm";
import { Col, Container, Row } from "react-bootstrap";

class RegisterUser extends React.Component {
  saveUser = (user) => {
    let { addUser, history } = this.props;
    addUser(user)
      .then(() => {
        window.alert("User Registered");
        history.push("/");
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
            <RegisterForm onSaveUser={this.saveUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterUser));
