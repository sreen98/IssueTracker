import React from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, withRouter, } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import AllIssuesPage from './components/AllIssuesPage/AllIssuesPage';
import AddIssuePage from './components/AddIssue/AddIssuePage';
import IssueDetail from './components/Issue/IssueDetailPage';
import EditIssuePage from './components/EditIssue/EditIssuePage';
// import PieChart from './components/PieChart';
import { Navbar, Nav, Button } from 'react-bootstrap';
import RegisterUser from './components/RegisterUser/RegisterUser'
import SignInPage from './components/SignIn/SignInPage';
// import MyProfilePage from './components/MyProfilePage';
import About from './components/About/About';
import * as loginActions from './actions/loginActions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
const PieChart = lazy(() => import('./components/Issue/PieChart'));
const MyProfile = lazy(() => import('./components/MyProfilePage/MyProfilePage'));


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            token: false
        }
    }
    logOut = () => {
        this.props.actions.loginUserSuccess(false);
        sessionStorage.setItem('token',false);
        this.setState({token:false})

    }
    componentDidMount(){
         this.state.token=sessionStorage.getItem('token');
         if(this.state.token)
            {this.setState({token:true})}
    }

    render() {


        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect variant="dark" bg="dark" expand="sm" >
                        <NavLink className="homenav" to="/" exact> {<HomeIcon fontSize="large" />}</NavLink>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto" >
                                <NavLink activeClassName="active" className="nav1" exact to="/"><ListIcon fontSize="small" />Issues</NavLink>
                                <NavLink activeClassName="active" className="nav1" to="/piechart"> <AssessmentIcon fontSize="small" />Statistics</NavLink>

                            </Nav>
                            <Nav>
                                {!this.state.token && <NavLink activeClassName="active" className="nav1" to="/register">Register</NavLink>}
                                {!this.state.token && <NavLink activeClassName="active" className="nav1" to="/signin">Sign In</NavLink>}
                                {this.state.token && <NavLink activeClassName="active" className="nav1" to="/myprofile"> {<AccountBoxIcon fontSize="small" />}My Profile</NavLink>}
                                <NavLink activeClassName="active" className="nav1" to="/about"><InfoIcon />About</NavLink>


                                {this.state.token && <Button variant="danger" size="sm" onClick={(e) => {
                                    this.logOut();
                                }}
                                    style={{
                                        marginRight: '10px'
                                    }}> {<ExitToAppIcon fontSize="small" />}Logout</Button>}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Switch>
                        <Route exact path="/" component={AllIssuesPage} />
                        <Route path="/addIssue" component={AddIssuePage} />
                        <Route path="/issue/:id" component={IssueDetail} />
                        <Route path="/editIssue/:id" component={EditIssuePage} />
                        <Route path="/piechart"
                            render={() => (<Suspense fallback={<h1>Loading...</h1>}><PieChart /></Suspense>)} />
                        <Route path="/register" component={RegisterUser} />
                        <Route path="/signin" component={SignInPage} />
                        <Route path="/myprofile"
                            render={() => (<Suspense fallback={<h1>Loading...</h1>}><MyProfile /></Suspense>)} />
                        <Route exact path="/about" component={About} />

                    </Switch>
                </div>
            </Router>
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
        actions: bindActionCreators(loginActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
