import React, { useState } from 'react';
import Form from './Form';
import Post from './Post';

function Feed(props) {
  const [showForm, setShowForm] = useState(true);

  const displayForm = () => {
    return (showForm) ? <Form newPost={props.newPost} toggleForm={toggleForm} /> : '';
  }

  const displayButton = () => {
    return (showForm) ? '' : <button onClick={toggleForm} >Toggle</button>;
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="feedClass">
      { displayForm() }
      { displayButton() }
      {props.posts.map(p => (<Post
        post={p}
        key={p.id}
        id={p.id}
        vote={props.vote}
        />))}
    <style> {`
        .feedClass {
        }
    `}
    </style>
  </div>
  );
}

export default Feed;
