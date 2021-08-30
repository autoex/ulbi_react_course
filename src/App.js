import React, {useState, useMemo, useEffect} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/modal/Modal";
import Button from "./UI/button/Button";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostsService from "./API/PostsService";
import Loader from "./UI/loader/Loader";


const App = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts =async ()=> {
        setIsFetching(true);
        const resp = await PostsService.getPosts();
        setPosts(resp);
        setIsFetching(false);


    };

    useEffect(()=> {fetchPosts()}, [])

    const [modalActive, setModalActive] = useState(false);
    const [isFetching, setIsFetching] = useState(false)
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)




    const createPost = (post) => {
        setPosts([...posts, post]);
        setModalActive(false)
    };

    const removePost = (idx) => setPosts(posts.filter(post => post.id !== idx));

    return (
        <div className='app'>
           {isFetching && <Loader/>}
            <Button onClick={() => setModalActive(true)}>Add</Button>
            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <Form createPost={createPost} setModalActive={setModalActive}/>
            </Modal>

            <PostFilter filter={filter} setFilter={setFilter}/>

           { isFetching ? <h1>Loading...</h1> : <Posts posts={sortedAndSearchedPosts} removePost={removePost}/>}


        </div>
    );
};

export default App;