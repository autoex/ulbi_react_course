import React from 'react';
import '../styles/Form.css'
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({title, body, setTitle, setBody, addPost}) => {
    return (
        <form className='form' onSubmit={addPost}>
            <div>
                <Input  type="text" placeholder={'Title'} value={title} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div>
                <Input type="text" placeholder={'Body'} value={body} onChange={e=>setBody(e.target.value)}/>
            </div>
            <div>
                <Button >Add</Button>
            </div>
        </form>
    );
};

export default Form;