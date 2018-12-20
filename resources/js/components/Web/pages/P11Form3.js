import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import FieldArray from '../common/FieldArray2'

class P11Form3 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    legal_residence: '',
    legal_residence_desc: '',
    legal_steps: '',
    legal_steps_desc: '',

   
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleCheck = this.handleCheck.bind(this);
 }

 handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
 }

 handleCheck(event){
  this.setState({
    marital_status: event.target.value,
  });
 }

 render() {
   const { classes } = this.props;
   return (
    <React.Fragment>
    
      <Grid container spacing={24}>
      <Grid item xs={12} >
      <Typography variant="subtitle2">
      Have you taken up legal permanent residence status in any country other than that of your nationality?
      If answer is “yes”, which country?
      </Typography>
       <FormControlLabel id="legal_residence" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="legal_residence" value="no" control={<Radio />} label="No" /> 
      <TextField
          id="legal_residence_desc"
          placeholder="Describe here"
          multiline
          rows="2"
          fullWidth
          margin="normal"
         
        />
      </Grid>
      <Grid item xs={12} >
      <Typography variant="subtitle2">
      Have you taken any legal steps towards changing your present nationality?
      If answer is “yes”, explain fully:
      </Typography>
       <FormControlLabel id="legal_steps" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="legal_steps" value="no" control={<Radio />} label="No" /> 
      <TextField
          id="legal_steps_desc"
          placeholder="Describe here"
          multiline
          rows="2"
          fullWidth
          margin="normal"
          
        />
      </Grid>
        <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>
        Are any of your relatives employed by a public international organization?
     If answer is “yes”, give the following information:
      </Typography>
         <FieldArray />
       <br />
       <br />
       <br />
       <br />
       <br />
         </Grid>
      
      </Grid>
    </React.Fragment>
  );
 }
}

P11Form3.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form3;
