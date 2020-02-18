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
    console.log(_votes.value);
    props.newPost({header: _header.value, body: _body.value, votes: _votes.value, id: v4()});
    _header.value = '';
    _body.value = '';
    props.toggleForm();
  }


  return (
    <div className='form'>
      <h1>Form</h1>

      <form onSubmit={handleNewBlueditForm}>
        <FormControl fullWidth>
        <TextField
          variant="outlined"
          type='text'
          id='header'
          placeholder='header'
          ref={(input) => {_header = input;}}/>
        <TextField
          variant="outlined"
          type='text'
          id='body'
          placeholder='body'
          ref={(input) => {_body = input;}}/>
        <TextField
          variant="outlined"
          type='hidden'
          id='votes'
          value='1'
          ref={(input) => {_votes = input;}}/>
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
