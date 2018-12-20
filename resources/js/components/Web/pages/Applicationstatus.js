import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import profilepic from '../../../../img/1.jpg';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AppTabs from '../common/AppTabs';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

mainfont:{
  fontFamily: 'barlow',
    },
  avatar: {
    margin: 10,
    alignItems:'center',
  },
  navlink:{
   textDecoration: 'none'
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
  papersidebar: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  paperHeader: {
    padding: theme.spacing.unit * 2,
    textAlign:'justify',
    
  },
  card: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    
  },
  content: {
   float: 'left',
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
    textAlign: 'right',
    
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  jobimg: {
    position:'relative',
    borderWidth:1,
    borderRadius:100, 
    boxShadow:'1px 1px 1px'
  }
});



function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Applicationstatus(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      
    <Grid container alignItems="center" className={classes.background}>
    <Grid  container style={{margin:'5%'}} spacing={24} styles={{fontFamily:'barlow'}}>

          <Grid item xs={12} sm={3} style={{textAlign:'center'}}>
          <img src={profilepic} widht="120" height="120"style={{position:'relative',borderWidth:1,borderRadius:100}}/>
          <br />
          <br />
          <Link to="./Profile"  className={classes.navlink}>
          <Button  variant="contained" color="primary"  >
        View Profile
      </Button>
      </Link>
      <List component="nav">
      <Link to="./Applicationstatus" className={classes.navlink} >
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Application Status" />
        </ListItem>
        </Link>
        <Link to="./Applicationinv"  className={classes.navlink}>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Invitation" />
        </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Saved Job" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Drafts" />
        </ListItemLink>
      </List>
        </Grid>
     
        <Grid item xs={12} sm={9} style={{textAlign:'left', top:'0', bottom:'10'}}>
       <Typography variant="h4" >
       Application Status
      </Typography>
      <Typography variant="subtitle1" color="inherit" gutterBottom>
      Here are your application status 
      </Typography>

        <Divider />
        <br />
        <Paper className={classes.paper}>
        
        <AppTabs />
        
        </Paper>
        </Grid>
       
        
        </Grid>
        
      </Grid>


      </React.Fragment>
    
  );
}

Applicationstatus.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Applicationstatus);