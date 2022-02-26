
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as issueActions from '../../actions/issueActions';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'top3'
    }
  }
  getChartData = (viewarray) => {

    function compare(a, b) {
      const viewA = a.views;
      const viewB = b.views;

      let comparison = 0;
      if (viewA > viewB) {
        comparison = 1;
      } else if (viewA < viewB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    viewarray.sort(compare);
    if (this.state.view == 'top3' && viewarray.length >= 3) {

      let myData = {
        labels: ["ID" + viewarray[0].id, "ID" + viewarray[1].id, "ID" + viewarray[2].id],
        datasets: [
          {
            label: 'Top Views',
            data: [viewarray[0].views, viewarray[1].views, viewarray[2].views],
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00'],
            hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000'],
            borderWidth: 10
          }
        ]

      }
      return myData;
    }
    else if (this.state.view == 'top5' && viewarray.length >= 5) {
      let myData = {
        labels: ["ID" + viewarray[0].id, "ID" + viewarray[1].id, "ID" + viewarray[2].id,
        "ID" + viewarray[3].id, "ID" + viewarray[4].id],
        datasets: [
          {
            label: 'Top Views',
            data: [viewarray[0].views, viewarray[1].views, viewarray[2].views,
            viewarray[3].views, viewarray[4].views],
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00', '#00A6B4',
              '#6800B4'],
            hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000', '#003350',
              '#35014F'],

            borderWidth: 10
          }
        ]

      }
      return myData;
    }
    else if (this.state.view == 'top10' && viewarray.length >= 10) {
      let myData = {
        labels: ["ID" + viewarray[0].id, "ID" + viewarray[1].id, "ID" + viewarray[2].id,
        "ID" + viewarray[3].id, "ID" + viewarray[4].id, "ID" + viewarray[5].id,
        "ID" + viewarray[6].id, "ID" + viewarray[7].id, "ID" + viewarray[8].id,
        "ID" + viewarray[9].id],
        datasets: [
          {
            label: 'Top Views',
            data: [viewarray[0].views, viewarray[1].views, viewarray[2].views,
            viewarray[3].views, viewarray[4].views, viewarray[5].views,
            viewarray[6].views, viewarray[7].views, viewarray[8].views, viewarray[9].views],
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00', '#00A6B4',
              '#6800B4', '#F400FB', '#028E54', '#BFFF03', '#2E85FF', '#853EF9'],
            hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000', '#003350',
              '#35014F', '#F400FB', '#028E54', '#BFFF03', '#2E85FF', '#853EF9'],

            borderWidth: 10
          }
        ]

      }
      return myData;
    }
    else {
      return 'NO_DATA'
    }

  }

  handleChangeView = (event) => {

    this.setState({ view: event.target.value });

  }

  render() {
    let data;
    let viewarray = [];
    this.props.issues.map(issue => {
      viewarray.push(issue);
    });

    (viewarray.length != 0) && (data = this.getChartData(viewarray))
    if (data == "NO_DATA") {
      window.alert("Insufficient Data to display chart");
    }

    return (
      <Container style={{ marginTop: '1rem' }}>
        <Row>
          <Col lg={6}>
            {(viewarray.length > 3) && (data != 'NO_DATA') && <Doughnut
              data={data}
              options={{
                title: {
                  display: true,
                  text: 'Top  Viewed Issues',
                  fontSize: 30
                },
                legend: {
                  display: true,
                  position: 'right',

                }
              }} />}
          </Col>
          <Col lg={{ offset: 1 }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Select</FormLabel>
              <RadioGroup aria-label="view1" name="view" value={this.state.view} onChange={this.handleChangeView}>
                <FormControlLabel value="top3" control={<Radio />} label="Top 3" />
                <FormControlLabel value="top5" control={<Radio />} label="Top 5" />
                <FormControlLabel value="top10" control={<Radio />} label="Top 10" />
              </RadioGroup>
            </FormControl>
          </Col>

        </Row>
      </Container>

    );

  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    issues: state.issues
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(issueActions, dispatch)
  };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chart));