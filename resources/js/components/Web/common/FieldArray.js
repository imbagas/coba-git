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
  svg: {
    width: 270,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class FieldArray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    checked: false,
    dependent1_name: '',
    dependent1_birth: '',
    dependent1_relationship: '',
    dependent2_name: '',
    dependent2_birth: '',
    dependent2_relationship: '',
    dependent3_name: '',
    dependent3_birth: '',
    dependent3_relationship: '',
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
      Have you any Dependents ?
      </Typography>
      <Typography variant="subtitle2">
       No <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" /> Yes
       </Typography>
        <div className={classes.container}>
          <Zoom in={checked}>
            <Paper elevation={4} className={classes.paper} >
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
        Dependents 1:
      </Typography>
          <TextField
            id="dependent1_name"
            name="dependent1_name"
            label="Name"
            defaultValue=""
          />
          <TextField
            id="dependent1_birth"
            name="dependent1_birth"
            label="Date of Birth"
            defaultValue=""
          />
          <TextField
            required
            id="dependent1_relationship"
            name="dependent1_relationship"
            label="Relationship"
            defaultValue=""
          />
            </Paper>
            </Paper>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
            <Paper elevation={4} className={classes.paper}>
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
        Dependents 2:
      </Typography>
          <TextField
           
            id="dependent2_name"
            name="dependent2_name"
            label="Name"
            defaultValue=""
          />
          <TextField
           
            id="dependent2_birth"
            name="dependent2_birth"
            label="Date of Birth"
            defaultValue=""
          />
          <TextField
           
            id="dependent2_relationship"
            name="dependent2_relationship"
            label="Relationship"
            defaultValue=""
          />
            </Paper>
            </Paper>
          </Zoom>
          <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
            <Paper elevation={4} className={classes.paper}>
            <Paper className={classes.paper} >
            <Typography variant="subtitle1" gutterBottom>
        Dependents 3:
      </Typography>
          <TextField
           
            id="dependent3_name"
            name="dependent3_name"
            label="Name"
            defaultValue=""
          />
          <TextField
          
            id="dependent3_birth"
            name="dependent3_birth"
            label="Date of Birth"
            defaultValue=""
          />
          <TextField

            id="dependent3_relationship"
            name="dependent3_relationship"
            label="Relationship"
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

FieldArray.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FieldArray);