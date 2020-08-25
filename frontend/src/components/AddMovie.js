import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '20px',
  },
  container: {
    alignContent: 'center',
    textAlign: 'center',
    minWidth: '22rem',
    border: '1px solid #272727',
    borderRadius: '3rem',
  },
  title: {
    color: '#272727',
  },
  textFields: {
    minWidth: '18rem',
    marginBottom: '1.5rem',
  },
  buttonColor: {
    background: '#272727',
    color: 'white',
    marginBottom: '2rem',
  },
}));

// const handleNewMovieSubmit = movie => {
//   fetch('http://localhost:8080/add-movie', {
//     method: 'POST',
//     body: JSON.stringify(movie),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then(res => res.json())
//     .then(json => alert(json))
//     .catch(err => console.log(err));
// };

const AddMovie = props => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <div>
      <Container maxWidth='sm'>
        <Typography component='div' className={classes.container}>
          <h1 className={classes.title}>Add New Movie</h1>
          {/* <form method='POST' action='http://localhost:8080/add-movie'> */}
          <form method='POST' onSubmit={handleSubmit(onSubmit)}>
            <div>
              <TextField
                name='name'
                label='Name'
                variant='outlined'
                type='text'
                className={classes.textFields}
                ref={register({
                  required: 'The name is required field',
                  maxLength: {
                    value: 30,
                    message: 'The maximum length is 30',
                  },
                })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <TextField
                name='image'
                label='Image URL'
                variant='outlined'
                type='url'
                className={classes.textFields}
              />
            </div>
            <div>
              <TextField
                name='description'
                label='Description'
                variant='outlined'
                type='text'
                className={classes.textFields}
                multiline
                rows={6}
              />
            </div>
            <div>
              <Button
                variant='contained'
                className={classes.buttonColor}
                type='submit'
              >
                Add Movie
              </Button>
            </div>
          </form>
        </Typography>
      </Container>
    </div>
  );
};

export default AddMovie;
