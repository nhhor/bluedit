import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function Form(props) {
let _header = null;
let _body = null;
let _votes = 1;

function handleNewBlueditForm(event) {
  event.preventDefault();
  console.log(_votes.value);
  props.newPost({header: _header.value, body: _body.value, votes: _votes.value, id: v4()});
  _header.value = '';
  _body.value = '';
}


  return (
    <div className='form'>
      <h1>Form</h1>

<form onSubmit={handleNewBlueditForm}>
  <input
    type='text'
    id='header'
    placeholder='header'
    ref={(input) => {_header = input;}}/>
    <input
    type='text'
    id='body'
    placeholder='body'
    ref={(input) => {_body = input;}}/>
    <input
    type='hidden'
    id='votes'
    value='1'
    ref={(input) => {_votes = input;}}/>



  <button type='submit'>Submit Post</button>
</form>


      <style>{`
          .form {
            width = 100%;
            background-color: #f00;
            overflow: hidden;
            text-align: center;
          }

          `} </style>
      </div>
    );
  }

  Form.propTypes = {
    onNewBlueditForm: PropTypes.func
  };

  export default Form;
