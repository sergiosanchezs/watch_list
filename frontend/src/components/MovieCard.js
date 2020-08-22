import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

const MovieCard = props => {
  const classes = props.classes;
  const data = props.data;
  const noWrap = props.noWrap ?? false;
  const buttonMoreDetails = props.moreDetails ?? false;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.image}
          title={data.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {data.name}
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            noWrap={noWrap}
            component='p'
          >
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {buttonMoreDetails && (
        <CardActions>
          <Button
            onClick={() => {
              console.log(data._id);
            }}
            size='small'
            color='primary'
          >
            More Details
          </Button>
          {/* <Link href='/{data.id}' variant='body2'>
                  More Details
                </Link> */}
        </CardActions>
      )}
    </Card>
  );
};

export default MovieCard;
