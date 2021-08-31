import React, {useState, useEffect} from 'react';
import {usePosts} from "../../hooks/usePosts";
import {useFetching} from "../../hooks/useFetching";
import PostsService from "../../API/PostsService";
import {getPagesCount} from "../../utils/pages";
import Loader from "../../UI/loader/Loader";
import Button from "../../UI/button/Button";
import PostFilter from "../../components/PostFilter";
import Form from "../../components/Form";
import Modal from "../../UI/modal/Modal";
import Posts from "../../components/Posts";


const PostsPage = () => {
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
        <>
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


        </>
    );
};

export default PostsPage;