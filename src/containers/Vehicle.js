import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import VehiclesComponent from '../components/Vehicle'
import api from '../config';
import axios from 'axios';

class VehicleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
            size: 5,
            page: 0,
            totalPages: 0,
            totalItems: 0,
            loading: true,
        }
    }

    componentDidMount() {
        this.getVehicles();
    }

    getVehicles(page, pageSize) {
        axios.get(api.vehiles, { params: { size: pageSize || this.state.size, page: page || this.state.page } })
            .then(response => {
                console.log(response.data.vehicles);
                this.setState({
                    vehicles: response.data.vehicles
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
        console.log(params, params.curentPage, this.state.page, this.state.curentPage);
        this.getVehicles(params.page);
    }

    handlePageSizeChange = (params) => {
        this.setState({ size: params.pageSize, loading: true });
        this.getVehicles(0, params.pageSize);
    }

    render() {
        const { imageURL } = this.state;
        return (
            <div>
                <Header title="Vehicles" ></Header>
                <VehiclesComponent
                    handlePageChange={this.handlePageChange}
                    handlePageSizeChange={this.handlePageSizeChange}
                    size={this.state.size}
                    pagination
                    page={this.state.page}
                    totalItems={this.state.totalItems}
                    vehicles={this.state.vehicles}
                ></VehiclesComponent>
            </div>
        );
    } s
}

export default VehicleContainer;