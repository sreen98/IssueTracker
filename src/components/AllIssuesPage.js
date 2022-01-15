import React from 'react';
import { Link } from 'react-router-dom';
import IssueList from './IssueList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../actions/issueActions';
import { Container, Row, Col } from 'react-bootstrap';


class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>

                <Row>
                    <Col >
                        <h1 className="mainheading">Issue List</h1>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <IssueList issues={this.props.issues}></IssueList>
                    </Col>
                </Row>

            </Container >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        issues: state.issues,
        loginToken: state.login,
        users: state.users,
        uid: state.profile

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(issueActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AllIssuesPage);
