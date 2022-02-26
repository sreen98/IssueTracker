import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import EditIssueForm from './EditForm';
import { Container, Row, Col } from 'react-bootstrap'


class EditIssuePage extends React.Component {
    constructor(props) {
        super(props);
        this.checkLogin(props.history);

    }
    checkLogin(history) {
        let authenticated = this.props.login;
        if (!authenticated) {
            window.alert("You have to Sign in to Edit Details")
            history.push('/signin');
        }

    }
    editIssue = (issue, id) => {
        let abc=this.props.issues.filter(temp=>temp.id==id);
        issue.views=abc[0].views;
        this.props.actions.editIssue(issue, id)
            .then(() => {
                window.alert("Issue Edited")
                this.props.history.push("/");
            }
            )
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ offset: 1, span: 8 }}>
                        <EditIssueForm
                            id={this.props.location.id}
                            type={this.props.location.type}
                            issuedesc={this.props.location.issuedesc}
                            severity={this.props.location.severity}
                            status={this.props.location.status}
                            createdDate={this.props.location.createdDate}
                            resolvedDate={this.props.location.resolvedDate}
                            onSaveEdit={this.editIssue} />
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
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(issueActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditIssuePage));
