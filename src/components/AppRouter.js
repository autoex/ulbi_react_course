import React from 'react';
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Route, Switch} from "react-router-dom";
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route=> <Route exact path={route.path} component={route.component}/>)}
            <Route component={NoMatch}/>
        </Switch>
    );
};

export default AppRouter;