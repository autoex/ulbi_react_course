import React, {useState} from 'react';
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Login from "../pages/login/Login";

const AppRouter = () => {
    const [authorized, setAuthorized ] = useState(true);
    return (
        <Switch>
            {authorized ?
                (privateRoutes.map(route=>  <Route exact path={route.path} component={route.component}/>)
                )


                :
                publicRoutes.map(route=> <Route exact path={route.path} component={route.component}/>)}

            {authorized ? <Route component={NoMatch}/> : <Route component={Login}/>}
        </Switch>
    );
};

export default AppRouter;