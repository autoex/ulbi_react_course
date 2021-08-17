import React, {useState, useMemo} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";
import PostFilter from "./components/PostFilter";


const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Title', description: 'Description'},
        {id: 2, title: '111', description: 'dfdf'},
        {id: 3, title: 'asds', description: 'aaaa'},

    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})


    const getSortedPosts =()=> {
        if(filter.sort) {
            return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    };

    const sortedPosts = useMemo(()=> {
        console.log('RUN')
        if(filter.sort) {
            return [...posts].sort((a, b)=> a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts

    }, [filter.sort, posts]);


    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter((post)=>post.title.toLowerCase().includes(filter.query))

    }, [filter.query, sortedPosts])

    const createPost =(post)=> {
        setPosts([...posts, post])

    };
    const removePost =(idx)=> {
        setPosts(posts.filter(post=>  post.id !== idx ));


    };

    return (
        <div className='app'>
            <Form createPost={createPost} />
            <hr style={{marginBottom: '15px'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {sortedAndSearchedPosts.length === 0 ? 'No posts' : <Posts posts={sortedAndSearchedPosts} removePost={removePost}/>}



        </div>
    );
};

export default App;