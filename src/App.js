import React, {useState} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";


const App = () => {
    const [posts, setPosts] = useState([
        {id:1, title: 'Title', description: 'Description'},
        {id:2, title: 'Title', description: 'Description'},
        {id:3, title: 'Title', description: 'Description'},
        {id:4, title: 'Title', description: 'Description'},
        ])

    return (
        <div className='app'>
                <Form/>
            <Posts posts={posts}/>



        </div>
    );
};

export default App;