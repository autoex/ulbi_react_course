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

    const [post, setPost] = useState({title: '', body: ''});
    const addPost = (e) => {
        e.preventDefault();
        if (post.title.trim().length === 0 || post.body.trim().length === 0) return;
        const newPost = {
            id: Date.now(),
            title: post.title,
            description: post.body
        };
        setPosts([...posts, newPost]);
        setPost({...post, title: '', body:''})

    };
    const removePost =(idx)=> {
        setPosts(posts.filter(post=>  post.id !== idx ));


    };
    return (
        <div className='app'>
            <Form post={post} setPost={setPost} addPost={addPost}/>
            <Posts posts={posts} removePost={removePost}/>


        </div>
    );
};

export default App;