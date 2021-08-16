import React, {useState} from 'react';
import '../styles/Form.css'
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const Form = ({createPost}) => {
    const [post, setPost] = useState({title: '', description: ''});
    const addPost = (e) => {
        e.preventDefault();
        if (post.title.trim().length === 0 || post.description.trim().length === 0) return;
        const newPost = {
            id: Date.now(),
            title: post.title,
            description: post.description

        }

        createPost(newPost)
        setPost({...post, title: '', description: ''})

    };
    return (
        <form className='form' onSubmit={addPost}>
            <div>
                <Input type="text" placeholder={'Title'} value={post.title}
                       onChange={e => setPost({...post, title: e.target.value})}/>
            </div>
            <div>
                <Input type="text" placeholder={'Body'} value={post.description}
                       onChange={e => setPost({...post, description: e.target.value})}/>
            </div>
            <div>
                <Button>Add</Button>
            </div>
        </form>
    );
};

export default Form;