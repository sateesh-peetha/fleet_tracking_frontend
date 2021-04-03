import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vehicles from './containers/Vehicle';
import VehicleLocation from './containers/VehicleLocation';

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={Vehicles} />
            <Route path="/:id" component={VehicleLocation} />
        </Switch>
    </>
);

export default Router;