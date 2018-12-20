import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <LinearProgress style={{backgroundColor: '#be2126'}} variant="determinate" value="0" />
        <Toolbar>
          <Typography variant="h8" color="inherit" className={classes.grow}>
            Follow iMMAP on: Facebook Twitter Linkedin Youtube
          </Typography>
          <img width="30%" src="https://immap.org/wp-content/uploads/2016/12/immap-logo-strap2.png" alt="Card image cap" />
        </Toolbar>
         <Divider />
    
        <Typography align="center" variant="h8" style={{fontFamily: 'barlow'}}> © Copyright 2018. All Rights Reserved.</Typography>
      </AppBar>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);