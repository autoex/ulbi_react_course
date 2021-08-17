import React from 'react';
import PostItem from "./PostItem";

const Posts = ({posts, removePost}) => {
    if(!posts.length) {
        return  <h1>No posts</h1>
    }
    return (
        <div className='posts'>
            <h1>Posts:</h1>
                {posts.map((post, idx) => <PostItem removePost={removePost} key={post.id} post={post} idx={idx + 1}/>)}

        </div>
    );
};

export default Posts;