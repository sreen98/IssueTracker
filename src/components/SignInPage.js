import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInForm from './SignInForm';
import UserApi from '../data/UserApi';
import * as loginActions from '../actions/loginActions';
import *  as myProfileActions from '../actions/myProfileActions';
import { Col, Container, Row } from 'react-bootstrap';


class SignInPage extends React.Component {
    constructor(props) {
        super(props);
    }
   
    signIn = (currentUser) => {
        let allUsers = [];
        let signInToken = false;
        UserApi.getUser(currentUser.email).then(checkUser => {
            if (checkUser.length == 0) {
                window.alert("Please register");
                this.props.history.push("/register")
            }
            else if (checkUser?.[0]?.password == currentUser.password) {
            
                let userid = checkUser[0];
                window.alert("Sign in Successfull");
                this.props.actions.loginUserSuccess(true);
                sessionStorage.setItem('token',"true");
                this.props.action2.loginProfile(userid);

                this.props.history.push("/");
            }
            else {
                window.alert("Incorrect Password")
            }

        })

    }

    render() {
        return (
            <Container>
                <Row>
                {console.log(sessionStorage.getItem('token'))}
                    <Col lg={{offset:1,span:7}}>
                        <SignInForm onSignIn={this.signIn} />
                    </Col>
                </Row>
            </Container>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(loginActions, dispatch),
        action2: bindActionCreators(myProfileActions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(withRouter(SignInPage));