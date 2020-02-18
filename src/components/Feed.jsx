import React from 'react';
import Form from './Form';
import Post from './Post';

function Feed(props) {
  return (
    <div>
      <Form newPost={props.newPost} />
      {props.posts.map(p => (<Post
        post={p}
        key={p.id}
        id={p.id}
        vote={props.vote}
        />))}
    </div>
  );
}

export default Feed;
