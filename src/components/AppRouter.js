import React, {useState} from 'react';
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";

const AppRouter = () => {
    const [authorized, setAuthorized] = useState(false);
    return (
        authorized ?
            <Switch>
                {(privateRoutes.map(route => <Route exact path={route.path} component={route.component}/>)
                )}
                <Route component={NoMatch}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => <Route exact path={route.path} component={route.component}/>)}}
                <Redirect to='login'/>
            </Switch>)
};


export default AppRouter;