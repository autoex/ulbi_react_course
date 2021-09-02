import React, {useContext} from 'react';
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import {AuthContext} from "../../context";
import {useHistory} from 'react-router-dom'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login =(e)=> {
        e.preventDefault();
        setIsAuth(true);

    };
    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={login}>
                <Input type="text" placeholder='Login'/>
                <Input type="password" placeholder='Password'/>
                <Button>Log In</Button>
            </form>
        </div>
    );
};

export default Login;