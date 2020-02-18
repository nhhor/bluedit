import React, { useState } from 'react';
import Form from './Form';
import Post from './Post';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

function Feed(props) {
  const [showForm, setShowForm] = useState(false);
  const [bgColor, setBgColor] = useState('');

  const displayForm = () => {
    return (showForm) ? <Form newPost={props.newPost} toggleForm={toggleForm} /> : '';
  }

  const displayButton = () => {
    return (showForm) ?
    '' :
    <FormControl style={toggleStyle}><Button
      type='submit'
      variant="contained"
      color="primary"
      size="small"
      onClick={toggleForm} >Create a Post</Button></FormControl>;
  }

  const toggleForm = () => {
    setBgColor((bgColor === 'rgb(100, 100, 100)') ? '' : 'rgb(100, 100, 100)' );
    setShowForm(!showForm);
  }

  const feedStyle = {
    backgroundColor: bgColor,
    maxWidth: '1400px',
    margin: 'auto'
  };

  const toggleStyle = {
    margin: '-30 auto 10 auto'
  }

  return (
    <div className="feedClass" style={feedStyle}>
      { displayForm() }
      { displayButton() }
      {props.posts.map(p => (<Post
        post={p}
        key={p.id}
        id={p.id}
        vote={props.vote}
        timeNow={props.timeNow}
        />))}
  </div>
  );
}

export default Feed;
