import React from 'react';
import Issue from './Issue';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import { bindActionCreators } from 'redux';
import * as issueActions from '../actions/issueActions';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            searchText: "",
            open: false,
            toDisplay: {
                "isIssueDesc": true,
                "isSeverity": true,
                "isStatus": true,
                "isCreatedDate": true,
                "isResolvedDate": true
            },
            multidel: []


        }
    }
    handleChange = value => {
        this.setState({ searchText: value });
    }

    handleChangeIssueDesc = () => {

        let temp = !(this.state.toDisplay.isIssueDesc);
        this.setState(prevState => ({
            toDisplay: {
                ...prevState.toDisplay,
                isIssueDesc: temp
            }

        }))
    }
    handleChangeSeverity = () => {

        let temp = !(this.state.toDisplay.isSeverity);
        this.setState(prevState => ({
            toDisplay: {
                ...prevState.toDisplay,
                isSeverity: temp
            }

        }))
    }
    handleChangeStatus = () => {

        let temp = !(this.state.toDisplay.isStatus);
        this.setState(prevState => ({
            toDisplay: {
                ...prevState.toDisplay,
                isStatus: temp
            }

        }))
    }
    handleChangeCreatedDate = () => {

        let temp = !(this.state.toDisplay.isCreatedDate);
        this.setState(prevState => ({
            toDisplay: {
                ...prevState.toDisplay,
                isCreatedDate: temp
            }

        }))
    }
    handleChangeResolvedDate = () => {

        let temp = !(this.state.toDisplay.isResolvedDate);
        this.setState(prevState => ({
            toDisplay: {
                ...prevState.toDisplay,
                isResolvedDate: temp
            }

        }))

    }
    handleMultiDelete = (id) => {
        if (this.state.multidel.length >= 1) {
            this.state.multidel.forEach(temp => {
                if (temp === id) {
                    let arr = this.state.multidel.filter(item => item !== id)
                    this.setState({ multidel: [...arr] });
                }

                else {
                    this.setState({ multidel: [...this.state.multidel, id] });

                }
            });
        }
        if (this.state.multidel.length === 0) {
            this.setState({ multidel: [...this.state.multidel, id] });

        }

    }

    render() {

        let IssueNodes = this.props.issues.filter(data => {
            if (this.state.searchText == '')
                return data;

            else if (data.type.toLowerCase().includes(this.state.searchText.toLowerCase()))
                return data;


        }).map(issue => {
            return (
                <Issue toDisplay={this.state.toDisplay} counter={issue.id} key={issue.id}
                    type={issue.type} issuedesc={issue.issuedesc} severity={issue.severity}
                    status={issue.status} createdDate={issue.createdDate}
                    resolvedDate={issue.resolvedDate} views={issue.views}
                    multiDelete={this.handleMultiDelete}
                >

                </Issue>
            );

        });
        return (

            <Container style={{ marginTop: "1rem" }} >

                <Row className="row_addissue_search" md={true}>
                    <Col  >
                        <Link to="/addIssue">
                            <Button variant="light" size="sm"><AddIcon fontSize="small" />Add Issue</Button>
                        </Link>
                    </Col>
                    <Col >
                        <Button onClick={(e) => {
                            e.preventDefault();
                            if (this.props.login != true) {
                                window.alert("Please Login");

                            }
                            else {

                                this.state.multidel.forEach((temp1, i) => {

                                    this.props.issues.forEach(temp2 => {
                                        setTimeout(() => {
                                            if (temp1 === temp2.id) {
                                                this.props.actions.deleteIssue(temp1)
                                            }
                                        }, i * 2000);
                                    })


                                });

                                window.alert("Issues Deleted")


                            }
                        }} variant="light" size="sm">Delete<DeleteIcon fontSize="small" /></Button>


                    </Col>

                    <Col lg={{ offset: 6 }} xs={6} style={{ padding: '.5rem' }}  >
                        <input type="text" placeholder="Enter the Type to search" value={this.searchText}
                            onChange={e => this.handleChange(e.target.value)}
                            style={{ borderRadius: '5px', border: '2px', padding: '0.25rem' }}
                        />
                    </Col>
                </Row>

                <Row className="selectfilter" lg={1} xs={1}>

                    <Button
                        onClick={() => {
                            let tmp = !(this.state.open);
                            this.setState({ open: tmp })
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.open}
                        variant="outline-dark"
                        size="sm"
                    >
                        <EditIcon fontSize="small" /> Click To Customize Fields
                        </Button>
                    <Collapse in={this.state.open} ref={this.wrapper}>

                        <Container style={{ marginTop: '1rem' }}>
                            <Row xs={1} lg={5}>
                                <Col >

                                    <label>Description  </label>
                                    <input type="checkbox" defaultChecked={this.state.toDisplay.isIssueDesc}
                                        onChange={this.handleChangeIssueDesc} />
                                </Col>
                                <Col  >
                                    <label>Severity </label>
                                    <input type="checkbox" defaultChecked={this.state.toDisplay.isSeverity}
                                        onChange={this.handleChangeSeverity} />
                                </Col>
                                <Col>
                                    <label>Status </label>
                                    <input type="checkbox" defaultChecked={this.state.toDisplay.isStatus}
                                        onChange={this.handleChangeStatus} />
                                </Col>
                                <Col  >
                                    <label>Created Date </label>
                                    <input type="checkbox" defaultChecked={this.state.toDisplay.isCreatedDate}
                                        onChange={this.handleChangeCreatedDate} />
                                </Col>
                                <Col >
                                    <label>Resolved Date </label>
                                    <input type="checkbox" defaultChecked={this.state.toDisplay.isResolvedDate}
                                        onChange={this.handleChangeResolvedDate} />
                                </Col>
                            </Row>
                        </Container>


                    </Collapse>
                </Row>

                <Row>
                    {IssueNodes.length == 0 && (
                        <Row>
                            <Col >
                                No records found to display!
                            </Col>
                        </Row>
                    )}

                    {IssueNodes}
                </Row>

            </Container>


        )

    }
}

function mapStateToProps(state, ownProps) {
    return {
        login: state.login

    };

}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(issueActions, dispatch)

    };

}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);

