import React from 'react';
import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";

const Login = () => {
    return (
        <div>
           <h1>Login</h1>
            <Input type="text" placeholder='Login'/>
            <Input type="password" placeholder='Password'/>
            <Button>Log In</Button>
        </div>
    );
};

export default Login;