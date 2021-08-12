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

    const createPost =(post)=> {
        setPosts([...posts, post])

    };
    const removePost =(idx)=> {
        setPosts(posts.filter(post=>  post.id !== idx ));


    };
    return (
        <div className='app'>
            <Form createPost={createPost} />
            <Posts posts={posts} removePost={removePost}/>


        </div>
    );
};

export default App;