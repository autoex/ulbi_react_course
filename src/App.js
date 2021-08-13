import React, {useState} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";
import Select from "./UI/select/Select";


const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Title', description: 'Description'},
        {id: 1, title: '111', description: 'dfdf'},
        {id: 1, title: 'asds', description: 'aaaa'},

    ]);
    const [selectedSort, setSelectedSort] = useState('');

    const createPost =(post)=> {
        setPosts([...posts, post])

    };
    const removePost =(idx)=> {
        setPosts(posts.filter(post=>  post.id !== idx ));


    };
    const sortPosts =(sort)=> {
        setSelectedSort(sort);
        setPosts([...posts.sort((a, b)=> a[sort].localeCompare(b[sort]))])
        console.log(sort);
    }
    return (
        <div className='app'>
            <Form createPost={createPost} />
            <hr style={{marginBottom: '15px'}}/>
            <Select value={selectedSort} sortPosts={sortPosts} defaultValue='Select' options={[{value: 'title', name: 'By title'}, {value: 'description', name: 'By description'}]}/>

            {posts.length === 0 ? 'No posts' : <Posts posts={posts} removePost={removePost}/>}



        </div>
    );
};

export default App;