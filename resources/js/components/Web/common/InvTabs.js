import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import CardInvitation from './CardInvitation'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    value: 0,
  };

  this.handleChange = this.handleChange.bind(this);
}

  handleChange (event,value) {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor:'#be2126'}}>
            <Tabs fullWidth value={value} onChange={this.handleChange}>
              <LinkTab label="Invitation" href="page1"  />
              
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <CardInvitation />
            <CardInvitation />
         
          </TabContainer>}
          
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
