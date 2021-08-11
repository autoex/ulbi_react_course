import React, {useState} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";


const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Title', description: 'Description'},
        {id: 2, title: 'Title', description: 'Description'},
        {id: 3, title: 'Title', description: 'Description'},
        {id: 4, title: 'Title', description: 'Description'},
    ]);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addPost = (e) => {
        e.preventDefault();
        if (title.trim().length === 0 || body.trim().length === 0) return
        const newPost = {
            id: Date.now(),
            title,
            description: body
        };
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
    };
    return (
        <div className='app'>
            <Form title={title} body={body} setBody={setBody} setTitle={setTitle} addPost={addPost}/>
            <Posts posts={posts}/>


        </div>
    );
};

export default App;