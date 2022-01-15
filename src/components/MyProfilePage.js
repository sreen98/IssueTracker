import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Row, Col, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap';
import * as userActions from '../actions/userActions';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';


class MyProfilePage extends React.Component {
    constructor(props) {
        super(props);

    }


    getuser = () => {

        return (this.props.currentUser);

    }
    render() {
        let user = [];
        (this.props.users.length != 0) && (user = this.getuser());

        return (

            <Container>
                <Row>
                    <Col lg={{ offset: 3, span: 5 }}>
                        {this.props.login ? (<Card style={{
                            margin: '1rem',
                            padding: '2rem',
                            textAlign: 'center',
                            alignItems: 'center'
                        }}
                            bg="light"
                            border="light">
                            <Card.Title>
                                < PermIdentityIcon fontSize="small" />My Profile
                            </Card.Title>
                            <ListGroup variant="list-group-flush">
                                <ListGroupItem>First Name:-{user.firstName}</ListGroupItem>
                                <ListGroupItem>Last Name:- {user.lastName}</ListGroupItem>
                                <ListGroupItem><EmailIcon />Email:- {user.email}</ListGroupItem>
                                <ListGroupItem><LocationOnIcon />Location:- {user.loc}</ListGroupItem>
                                <ListGroupItem><CallIcon />Mobile Number:- {user.mobileNumber}</ListGroupItem>
                            </ListGroup>
                            <Card.Footer>
                                <Link to="/"><Button className="primary" >Back</Button></Link>
                            </Card.Footer>

                        </Card>) : (<h1 className="mainheading">No User Data Found</h1>)}
                    </Col>

                </Row>

            </Container>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
        currentUser: state.profile,
        login: state.login
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyProfilePage));