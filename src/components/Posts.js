import React from 'react';
import PostItem from "./PostItem";

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post, idx)=> <PostItem key={post.id} post={post} idx={idx+1}/>)}
        </div>
    );
};

export default Posts;