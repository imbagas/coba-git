import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import P11Form1 from './P11Form1';
import P11Form2 from './P11Form2';
import P11Form3 from './P11Form3';
import P11Form4 from './P11Form4';
import P11Form5 from './P11Form5';
import P11Form6 from './P11Form6';
import P11Form7 from './P11Form7';
import P11Form8 from './P11Form8';
import P11Form9 from './P11Form9';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    background: 'linear-gradient(#be2126 20%, white 20% )',
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 2 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Step 1: Personal', 'Step 2: Contact', 'Step 3: Question', 'Step 4: Language', 'Step 5: Language', 'Step 6: Education', 'Step 7: Employement', 'Step 8: Question', 'Step 9: Agreement'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <P11Form1 />;
    case 1:
      return <P11Form2 />;
    case 2:
      return <P11Form3 />;
    case 3:
      return <P11Form4/>;  
    case 4:
      return <P11Form5/>;  
    case 5:
      return <P11Form6/>;  
    case 6:
      return <P11Form7/>;  
    case 7:
      return <P11Form8/>;  
    case 8:
      return <P11Form9/>;  
    case 9:
      return <P11Form10/>; 
    default:
      throw new Error('Unknown step');
  }
}

class Checkout extends React.Component {
  constructor(props) {
   super(props);
   this.state = {activeStep: 0};

   this.handleNext = this.handleNext.bind(this);
   this.handleBack = this.handleBack.bind(this);
   this.handleReset = this.handleReset.bind(this);

 }

 handleNext(event) {
   this.setState(state => ({
     activeStep: state.activeStep + 1,
   }));
 }

 handleBack(event) {
   this.setState(state => ({
     activeStep: state.activeStep - 1,
   }));
 }

 handleReset(event) {
   this.setState(state => ({
     activeStep: 0,
   }));
 }


 render() {
   const { classes } = this.props;
   const { activeStep } = this.state;


    return (
      <React.Fragment >
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Register Application
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                   Application Registered Successfully.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your application will be reviewed and updated to your account, you can access anytime on Profile menu.
                    Thank you
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
