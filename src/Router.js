import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/" component={vehiclesContainer} />
            {/* {ProgramRouter} */}
            <Route path="/:id" component={locationContainer} />
        </Switch>
    </>
);

export default Router;