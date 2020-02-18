import React, { useState } from 'react';
import Moment from 'moment';

function Post(props) {

  const voteUp = () => {
    props.vote(props.id, 1);
  }

  const voteDown = () => {
    props.vote(props.id, -1);
  }
  const displayTimePosted = (timePosted) => timePosted.from(props.timeNow, true); 

  return (
    <div className="postStyle">
      <div className="voteClass">
        <button onClick={voteUp}>+</button>
        <p>{props.post.votes}</p>
        <button onClick={voteDown}>-</button>
      </div>
      <div className="textStyle">
        <h4 className="h4textStyle">{props.post.header}</h4>
        <h6 className="h6textStyle">{`${props.post.timePosted}`}</h6>
        <h6 className="h6textStyle">{`${displayTimePosted(props.post.timePosted)}`}</h6>
        <p>{props.post.body}</p>
      </div>
      <style> {`
          .postStyle {
            background-color: #eee;

            margin: 20px;
            padding: 20px 3%;
            border-radius: 50px;
            background: rgb(238,238,238);
            background: linear-gradient(90deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 8.4%, rgba(204,204,204,1) 8.5%, rgba(204,204,204,1) 100%);
            display: grid;
            grid-template-columns: 5% 1fr;
          }

          .voteClass {
            text-align: center;
          }

          .textStyle {
            padding-left: 20px;
          }

          .h4textStyle {
            margin-top: 3px;
          }
          `}
        </style>
      </div>
    );
  }

  export default Post;
