import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';



function Form(props) {
  let _header = null;
  let _body = null;
  let _votes = 1;

  function handleNewBlueditForm(event) {
    event.preventDefault();
    props.newPost({header: _header.value, body: _body.value, votes: _votes.value, id: v4()});
    _header.value = '';
    _body.value = '';
    props.toggleForm();
  }

  const inputStyle = {
    marginBottom: '20px'
  };


  return (
    <div className='form'>
      <h2>New Post</h2>

      <form onSubmit={handleNewBlueditForm}>
        <FormControl fullWidth style={inputStyle}>
          <TextField
            variant="outlined"
            type='text'
            id='header'
            placeholder='header'
            required
            inputRef={(input) => {_header = input;}}/>
          <TextField
            variant="outlined"
            type='text'
            id='body'
            required
            placeholder='body'
            inputRef={(input) => {_body = input;}}/>
          <TextField
            variant="outlined"
            type='hidden'
            id='votes'
            value='1'
            inputRef={(input) => {_votes = input;}}/>
          <Button
            type='submit'
            variant="contained"
            color="primary"
            size="small"
            startIcon={<SaveIcon />}
            >
            Save
          </Button>
        </FormControl>
      </form>


      <style>{`
          .form {
            width = 100%;
            background-color: #fff;
            overflow: hidden;
            text-align: center;
            margin-left: 10%;
            margin-right: 10%;
            padding: 20px 10%;
            border-radius: 50px;
            box-shadow: 5px 5px 5px rgba(50, 50, 50, .75);

          }


          `} </style>
      </div>
    );
  }

  Form.propTypes = {
    onNewBlueditForm: PropTypes.func
  };

  export default Form;
