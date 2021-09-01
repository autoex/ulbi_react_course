import React from 'react';
import Button from "../UI/button/Button";
import {useHistory} from 'react-router-dom'

const PostItem = ({post, idx, removePost}) => {
    const route = useHistory();

    return (
        <div className='post' >
            <div className="post_body">
                <h2 className="post_title">{post.id}. {post.title}</h2>
                {post.description}
            </div>
            <div className="post_btn">
                <Button onClick={()=>removePost(post.id)}>Delete</Button>
                <br/>
                <Button onClick={()=>route.push(`/posts/${post.id}`)}>Open</Button>
            </div>

        </div>
    );
};

export default PostItem;