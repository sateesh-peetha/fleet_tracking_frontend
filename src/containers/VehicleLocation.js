import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import LocationComponent from '../components/Location'
import api from '../config';
import axios from 'axios';

class LocationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Vehicle_locations: [],
      size: 5,
      page: 0,
      totalPages: 0,
      totalItems: 0,
      loading: true,
      fromDate: new Date('2014-08-18T21:11:54'),
      toDate: new Date('2014-08-18T21:11:54'),
    }
  }

  componentDidMount() {
    this.getVehicles();
  }

  getVehicles(page, pageSize, fromDate, toDate) {
    axios.get(api.location + '/' + this.props.match.params.id
      , {
        params: {
          size: pageSize || this.state.size
          , page: page || this.state.page
          , fromDate: fromDate || this.state.fromDate
          , toDate: toDate || this.state.toDate
        }
      })
      .then(response => {
        this.setState({
          Vehicle_locations: response.data.Vehicle_locations
          , totalPages: response.data.totalPages
          , totalItems: response.data.totalItems
          , page: response.data.currentPage
          , loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          loading: false
        });
      });
  }

  handlePageChange = (params) => {
    this.setState({ page: params.page, loading: true });
    this.getVehicles(params.page);
  }

  handlePageSizeChange = (params) => {
    this.setState({ size: params.pageSize, loading: true });
    this.getVehicles(0, params.pageSize);
  }

  handleFromDateChange = (date) => {
    this.setState({ fromDate: date, loading: true });
    this.getVehicles(this.state.page, this.state.size, date, this.state.toDate);
  }

  handleToDateChange = (date) => {
    this.setState({ toDate: date, loading: true });
    this.getVehicles(this.state.page, this.state.size, this.state.fromDate, date);
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div>
        <Header title={`Vehicle ID:${this.props.match.params.id}`}></Header>
        <LocationComponent
          handlePageChange={this.handlePageChange}
          handlePageSizeChange={this.handlePageSizeChange}
          size={this.state.size}
          pagination
          page={this.state.page}
          totalItems={this.state.totalItems}
          Vehicle_locations={this.state.Vehicle_locations}
          handleFromDateChange={this.handleFromDateChange}
          handleToDateChange={this.handleToDateChange}
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
        ></LocationComponent>
      </div>
    );
  } s
}

export default LocationContainer;