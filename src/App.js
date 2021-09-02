import React, {useState} from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import NavMenu from "./components/NavMenu";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <div className='app'>
                    <NavMenu/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;