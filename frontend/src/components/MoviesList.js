import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieCard from './MovieCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
  },
  media: {
    height: 600,
  },
}));

const MoviesList = props => {
  const classes = useStyles();
  const movies = props.movies;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map(data => (
          <Grid key={data._id} item xs md={4} lg={4}>
            <MovieCard
              classes={classes}
              data={data}
              noWrap={true}
              moreDetails={true}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MoviesList;
