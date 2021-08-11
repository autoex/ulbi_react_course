import React from 'react';
import '../styles/Form.css'
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = () => {
    return (
        <form className='form'>
            <div>
                <Input  type="text" placeholder={'Title'}/>
            </div>
            <div>
                <Input type="text" placeholder={'Body'}/>
            </div>
            <div>
                <Button disabled>Add</Button>
            </div>
        </form>
    );
};

export default Form;