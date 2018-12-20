import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import profilepic from'./1.jpg';
import Divider from '@material-ui/core/Divider';
import Modalprofile from '../common/Modalprofile';
import Modalprofile2 from '../common/Modalprofile2';
import Modalprofile3 from '../common/Modalprofile3';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    
    background: 'linear-gradient(#be2126 20%, white 20% )',
  
},
mainfont:{
  fontFamily: 'barlow',
    },
  avatar: {
    margin: 10,
    alignItems:'center',
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    alignItems:'center',
  },
  paper: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
  },
  paperHeader: {
    padding: theme.spacing.unit * 2,
    textAlign:'center',
  },
  rafathar: {
    float: 'left',
  },
  card: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    
  },
  content: {
   float: 'left',
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    margin: 10,
    width: 120,
    height: 120,
    alignItems:'center',
    
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  margin: {
    margin: theme.spacing.unit,
    float: 'right',
    top: -20
    
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      
    <Grid container alignItems="center" className={classes.background}>
    <Grid  container style={{margin:'15%'}} spacing={24} styles={{fontFamily:'barlow'}}>
    <Grid item xs={12} style={{textAlign:'right'}}>
    <Button size="small" variant="contained" className={classes.button}>
        Export
      </Button>
      <Button variant="contained" className={classes.button}>
        Share
      </Button>
    </Grid>
          <Grid item xs={12}>     
          <Modalprofile />
          <Paper className={classes.paperHeader}>
          <img src={profilepic} widht="120" height="120"style={{position:'relative',borderWidth:1,borderRadius:100}}/>
          
       <Typography variant="h4" >
       Remy Sharp
      </Typography>
      
      <Typography variant="title" >
       Hotel California, United States
      </Typography>
      <Typography variant="body2" >
          Graduated from Boston University
        </Typography>
        </Paper>
        
        
        </Grid>
        
       
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
      Contact &nbsp;
      <Modalprofile2 />
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
       ☎ Telephone: 08123412
       <br />
       ☎ Mobile: 03221312
       <br />
       ⛿ Country : California
       <br />
       ⛾ Email: tes@mail.com
       <br />
       ⛫ Location: Street No 1
      </Typography>
      
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
      Personal Data &nbsp;
      <Modalprofile2 />
      </Typography>
      <Divider />
      <Typography variant="body1" gutterBottom>
      ☺ Birth Date: 08-30-1992
       <br />
       ⛿ Birth Nationality: Spain
       <br />
       ⛿ Present Nationality: United States
       <br />
       ♂ Sex: Male
       <br />
       ♡ Relationship: Single
      </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
      Summary &nbsp;
      <Modalprofile3 />
      </Typography>
      <Divider />
      <Typography variant="body1" textAlign="left">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
     Work Experiences &nbsp;
     <Modalprofile2 />
      </Typography>
      <Divider />
      <Grid item xs={12} >
      <Typography variant="subtitle1"  gutterBottom>
      {bull} Experiences 1
      </Typography>
      <Typography variant="body1" textAlign="left">
      ⏲ Duration: 1 April 2017 - 1 Juni 2017
      <br />
      ⌨ Description:  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} >
      <Typography variant="subtitle1"  gutterBottom>
      {bull} Experiences 2
      </Typography>
      <Typography variant="body1" textAlign="left">
      ⏲ Duration: 1 April 2017 - 1 Juni 2017
      <br />
      ⌨ Description:  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </Grid>
          </Paper>
        </Grid>


         <Grid item xs={12} >
          <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
     Organization Experiences &nbsp;
     <Modalprofile2 />
      </Typography>
     
      <Divider />
      <Grid item xs={12} >
      <Typography variant="subtitle1"  gutterBottom>
      {bull} Experiences 1
      </Typography>
      <Typography variant="body1" textAlign="left">
      ⏲ Duration: 1 April 2017 - 1 Juni 2017
      <br />
      ⌨ Description:  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} >
      <Typography variant="subtitle1"  gutterBottom>
      {bull} Experiences 2
      </Typography>
      <Typography variant="body1" textAlign="left">
      ⏲ Duration: 1 April 2017 - 1 Juni 2017
      <br />
      ⌨ Description:  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
     
      </Grid>
          </Paper>
        </Grid>
        </Grid>
        
      </Grid>

 
      </React.Fragment>
    
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);