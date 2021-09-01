import React from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <NavMenu/>
               <AppRouter/>
            </div>
        </BrowserRouter>
    );
};

export default App;