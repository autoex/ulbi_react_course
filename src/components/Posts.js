import React from 'react';
import PostItem from "./PostItem";
import FlipMove from "react-flip-move";

const Posts = ({posts}) => {
    return (
        <div>
            <FlipMove>
                {posts.map((post, idx) => <PostItem key={post.id} post={post} idx={idx + 1}/>)}
            </FlipMove>
        </div>
    );
};

export default Posts;