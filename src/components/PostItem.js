import React from 'react';
import Button from "../UI/button/Button";

const PostItem = ({post}) => {

    return (
        <div className='post'>
            <div className="post_body">
                <h2 className="post_title">{post.id}. {post.title}</h2>
                {post.description}
            </div>
            <div className="post_btn"><Button>Delete</Button></div>

        </div>
    );
};

export default PostItem;