import React from 'react';
import '../styles/Form.css'
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({post, setPost, addPost}) => {
    return (
        <form className='form' onSubmit={addPost}>
            <div>
                <Input  type="text" placeholder={'Title'} value={post.title} onChange={e=>setPost({...post, title:e.target.value})}/>
            </div>
            <div>
                <Input type="text" placeholder={'Body'} value={post.body} onChange={e=>setPost({...post, body:e.target.value})}/>
            </div>
            <div>
                <Button >Add</Button>
            </div>
        </form>
    );
};

export default Form;