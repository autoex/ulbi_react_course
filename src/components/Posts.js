import React from 'react';
import PostItem from "./PostItem";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post=> <PostItem key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;