import React from 'react';
import './styles/App.css'
import PostsPage from "./pages/postsPage/PostsPage";
import Main from "./pages/mainPage/Main";
import About from "./pages/aboutPage/About";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavMenu from "./components/NavMenu";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <NavMenu/>
                <Switch>
                <Route path={'/main'} component={Main}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/posts'} component={PostsPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;