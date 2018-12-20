import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
    width: 'auto',
    height: 'auto',
    boxShadow: 'none'
  },
 
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    checked: false,
    name_organization1: '',
    organization1_relationship: '',
    name_of_organization1: '',
    name_organization2: '',
    organization2_relationship: '',
    name_of_organization2: '',
    name_organization3: '',
    organization3_relationship: '',
    name_of_organization3: '',
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(){
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
      <Typography variant="subtitle2">
      </Typography>
      <Typography variant="subtitle2">
       No <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" /> Yes
       </Typography>
        <div className={classes.container}>
          <Zoom in={checked}>
            <Paper elevation={4} className={classes.paper} >
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
        Organization 1:
      </Typography>
          <TextField
            id="name_organization1"
            name="name_organization1"
            label="Name"
            defaultValue=""
          />
          <TextField
           
            id="organization1_relationship"
            name="organization1_relationship"
            label="Relationship"
            defaultValue=""
          />
          <TextField
           
           id="name_of_organization1"
           name="name_of_organization1"
           label="Name of Organization"
           defaultValue=""
         />
            </Paper>
            </Paper>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
            <Paper elevation={4} className={classes.paper}>
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
            Organization 2:
      </Typography>
          <TextField
            id="name_organization2"
            name="name_organization2"
            label="Name"
            defaultValue=""
          />
          <TextField
           
            id="organization2_relationship"
            name="organization2_relationship"
            label="Relationship"
            defaultValue=""
          />
          <TextField
           
            id="name_of_organization2"
            name="name_of_organization2"
            label="Name of Organization"
            defaultValue=""
          />
            </Paper>
            </Paper>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
            <Paper elevation={4} className={classes.paper}>
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
            Organization 3:
      </Typography>
      <TextField
            id="name_organization3"
            name="name_organization3"
            label="Name"
            defaultValue=""
          />
          <TextField
           
            id="organization3_relationship"
            name="organization3_relationship"
            label="Relationship"
            defaultValue=""
          />
           <TextField
           
           id="name_of_organization3"
           name="name_of_organization3"
           label="Name of Organization"
           defaultValue=""
         />
            </Paper>
            </Paper>
          </Zoom>
        </div>
        
      </div>
    );
  }
}

SimpleZoom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleZoom);