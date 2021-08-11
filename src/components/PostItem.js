import React from 'react';
import Button from "../UI/button/Button";

const PostItem = ({post, idx}) => {

    return (
        <div className='post'>
            <div className="post_body">
                <h2 className="post_title">{idx}. {post.title}</h2>
                {post.description}
            </div>
            <div className="post_btn"><Button>Delete</Button></div>

        </div>
    );
};

export default PostItem;