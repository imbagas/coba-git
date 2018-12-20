import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import AlertResponse from './AlertResponse';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    align: screenLeft,
    backgroundColor: '#be2126'
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>
        <Typography variant="h5" component="h2"  >
         Port Expert Consultant - Technical Rooster 
        </Typography>
          <Grid item xs={4}>
        </Grid>
        <Grid item xs={4} style={{ paddingTop:'10px', paddingBottom:'10px'}}>
        <Typography component="p" style={{paddingTop:'10px', paddingBottom:'10px'}}>
        <b>Area of expertise : </b>
          <br />
          Supply chain
          <br />
         <b> Country : </b>
          <br />
          Italy
        </Typography>
        </Grid>
        <Grid item xs={4} style={{ paddingTop:'10px', paddingBottom:'10px'}}>
        <Typography component="p" style={{paddingTop:'10px', paddingBottom:'10px'}}>
       <b>Type of contract : </b> 
          <br />
          Short term opportunities
          <br />
         <b> Interview Date :</b>
          <br />
          29 November 2019, 23:59 GMT
        </Typography>
        </Grid>
        <Grid item xs={4}>
        <CardActions>
       
     <AlertResponse />
     
      </CardActions>
        </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);