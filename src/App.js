import React, {useState, useMemo, useEffect} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";
import PostFilter from "./components/PostFilter";
import Modal from "./UI/modal/Modal";
import Button from "./UI/button/Button";
import {usePosts} from "./hooks/usePosts";
import PostsService from "./API/PostsService";
import Loader from "./UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPagesCount} from "./utils/pages";


const App = () => {
    const [posts, setPosts] = useState([]);




    const [modalActive, setModalActive] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0)
    const [isFetching, postsError, fetchPosts] = useFetching(async () => {
        const resp = await PostsService.getPosts(postsPerPage, currentPage);
        setPosts(resp.data);
        const totalCount = resp.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, postsPerPage))

    });

    useEffect(() => {
        fetchPosts()
    }, [currentPage])
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

            {isFetching ? <h1>Loading...</h1> : <Posts
                                                       currentPage={currentPage}
                                                       setCurrentPage={setCurrentPage}
                                                       totalPages={totalPages}
                                                       posts={sortedAndSearchedPosts}
                                                       removePost={removePost}
                                                       postsError={postsError}/>}


        </div>
    );
};

export default App;