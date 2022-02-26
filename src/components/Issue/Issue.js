import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as issueActions from "../../actions/issueActions";
import { Checkbox } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import BugReportIcon from "@material-ui/icons/BugReport";
import Tooltip from "@material-ui/core/Tooltip";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false,
    };
  }
  componentDidMount() {
    this.setState({ token: sessionStorage.getItem("token") });
  }
  onDelete = () => {
    this.setState({ token: sessionStorage.getItem("token") });
    if (!this.state.token) {
      window.alert("You have to Sign in to Delete Issue");
    } else {
      let confirm = window.confirm("Do you want to delete?");

      if (confirm) {
        this.props.actions
          .deleteIssue(this.props.counter)
          .then(() => window.alert("Issue Deleted"));
      }
    }
  };
  handleViewClick = () => {
    if (this.props.loginToken) {
      let count = this.props.views + 1;
      this.props.actions.addView(this.props.counter, { views: count });
    }
  };

  multiDelete = (id) => {
    this.props.multiDelete(id);
  };

  render() {
    const path = `/issue/${this.props.counter}`;
    const path1 = `/editIssue/${this.props.counter}`;

    return (
      <Card
        style={{
          width: "21rem",
          margin: "1rem",
          padding: "1rem",
          alignItems: "center",
        }}
        bg="light"
        border="light"
      >
        <Card.Title>
          <BugReportIcon />
        </Card.Title>

        <Card.Body style={{ textAlign: "center" }}>
          <ListGroup variant="flush">
            <ListGroupItem>Type: {this.props.type}</ListGroupItem>
            {this.props.toDisplay.isIssueDesc && (
              <ListGroupItem>Description: {this.props.issuedesc}</ListGroupItem>
            )}
            {this.props.toDisplay.isSeverity && (
              <ListGroupItem>Severity: {this.props.severity}</ListGroupItem>
            )}
            {this.props.toDisplay.isStatus && (
              <ListGroupItem>Status: {this.props.status}</ListGroupItem>
            )}
            {this.props.toDisplay.isCreatedDate && (
              <ListGroupItem>
                <CalendarTodayIcon fontSize="small" />
                Created Date: {this.props.createdDate}
              </ListGroupItem>
            )}
            {this.props.toDisplay.isResolvedDate && (
              <ListGroupItem>
                <CalendarTodayIcon fontSize="small" />
                Resolved Date: {this.props.resolvedDate}
              </ListGroupItem>
            )}

            <ListGroupItem>
              <Link
                to={{
                  pathname: path1,
                  id: this.props.counter,
                  type: this.props.type,
                  issuedesc: this.props.issuedesc,
                  severity: this.props.severity,
                  status: this.props.status,
                  createdDate: this.props.createdDate,
                  resolvedDate: this.props.resolvedDate || "",
                }}
              >
                <Button variant="warning" style={{ float: "left" }} size="sm">
                  Edit
                </Button>
              </Link>

              <Link to={{ pathname: path }}>
                <Button
                  variant="secondary"
                  onClick={this.handleViewClick}
                  size="sm"
                >
                  View{" "}
                </Button>
              </Link>

              <Button
                variant="danger"
                onClick={this.onDelete}
                style={{ float: "right" }}
                size="sm"
              >
                Delete
              </Button>
            </ListGroupItem>
          </ListGroup>
          <Card.Footer>
            <label>Select to Delete</label>
            <Tooltip title="Select">
              <Checkbox
                size="small"
                name="deletecheckbox"
                color="primary"
                icon={<DeleteOutlinedIcon fontSize="inherit" />}
                checkedIcon={<DeleteIcon fontSize="inherit" />}
                onChange={() => {
                  this.multiDelete(this.props.counter);
                }}
              />
            </Tooltip>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issues,
    loginToken: state.login,
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(issueActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
