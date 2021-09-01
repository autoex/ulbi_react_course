import React from 'react';
import PostsPage from "../pages/postsPage/PostsPage";
import About from "../pages/aboutPage/About";
import NoMatch from "../pages/noMatchPage/NoMatch";
import {Route, Switch} from "react-router-dom";
import PostDetails from "./PostDetails";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/posts'} component={PostsPage}/>
            <Route path={'/posts/:id'} component={PostDetails}/>
            <Route path={'/about'} component={About}/>
            <Route component={NoMatch}/>

        </Switch>
    );
};

export default AppRouter;