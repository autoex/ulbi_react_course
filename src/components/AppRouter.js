import React, {useContext} from 'react';
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth ?
            <Switch>
                {(privateRoutes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>)
                )}
                <Redirect to='/posts'/>
                <Route component={NoMatch}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => <Route key={route.path} exact={route.exact} path={route.path} component={route.component}/>)}}
                <Redirect to='login'/>
            </Switch>)
};


export default AppRouter;