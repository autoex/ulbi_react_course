import React from 'react';
import PostItem from "./PostItem";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Posts = ({posts, removePost, postsError}) => {
    if(!posts.length) {
        if (postsError) return  <h1>{postsError}</h1>
        return  <h1>No posts</h1>
    }
    return (
        <div className='posts'>
            <h1>Posts:</h1>
            <TransitionGroup>
                {posts.map((post, idx) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post__item"
                    ><PostItem removePost={removePost} post={post} idx={idx + 1}/>
                    </CSSTransition>)}
            </TransitionGroup>
        </div>
    );
};

export default Posts;