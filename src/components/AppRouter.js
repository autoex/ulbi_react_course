import React from 'react';
import PostsPage from "../pages/postsPage/PostsPage";
import About from "../pages/aboutPage/About";
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Route, Switch} from "react-router-dom";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={'/posts'} component={PostsPage}/>
            <Route path={'/about'} component={About}/>
            <Route component={NoMatch}/>

        </Switch>
    );
};

export default AppRouter;