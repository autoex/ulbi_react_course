import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import Button from "../UI/button/Button";
import PostsService from "../API/PostsService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../UI/loader/Loader";


const PostDetails = () => {
    const history = useHistory();
    const params = useParams();
    const userId = params.id;
    const [post, setPost] = useState('');


    const [isFetching, postsError, fetchPost] = useFetching(async () => {

        const resp = await PostsService.getPost(userId);
        setPost(resp.body);


    });
    useEffect(()=> {
        fetchPost()
    }, [])
    return (
        <div>
            <Button onClick={() => history.goBack()}>Back</Button>
            {isFetching ? <Loader/> : <div>{post}</div>}

        </div>
    );
};

export default PostDetails;