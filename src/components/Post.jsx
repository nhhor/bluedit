import React from 'react';

function Post(props) {

  const voteUp = () => {
    props.vote(props.id, 1);
  }

  const voteDown = () => {
    props.vote(props.id, -1);
  }

  return (
    <div>
      <h4>{props.post.header}</h4>
      <p>{props.post.body}</p>
      <div>
        <button onClick={voteUp}></button>
        <p>{props.post.votes}</p>
        <button onClick={voteDown}></button>
      </div>
    </div>
  );
}

export default Post;
