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
    const [comments, setComments] = useState([]);



    const [isFetching, postsError, fetchPost] = useFetching(async () => {

        const resp = await PostsService.getPost(userId);
        setPost(resp.body);


    });

    const [isFetchingComments, commentsError, fetchComments] = useFetching(async () => {

        const resp = await PostsService.getComments(userId);
        setComments(resp);



    });
    useEffect(()=> {
        fetchPost();
        fetchComments()
    }, [])
    return (
        <div>
            <Button onClick={() => history.goBack()}>Back</Button>
            {isFetchingComments ? <Loader/> :
                <div>{post}</div>
            }

            {isFetchingComments ? <Loader/> :

               <div><h2>Comments:</h2>
                   { comments.map(comment=><div className='card' key={comment.id}>{comment.body}</div>)}
               </div>
            }

        </div>
    );
};

export default PostDetails;