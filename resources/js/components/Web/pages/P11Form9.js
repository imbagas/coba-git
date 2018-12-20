import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RaisedButton from '@material-ui/core/Button';

class P11Form9 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    ever_arrested: '',
    ever_arrested_sec: '',
    date_certify: '',
    signature_certify: '',
   
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
      <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
      HAVE YOUR EVER BEEN ARRESTED, INDICTED, OR SUMMONED INTO COURT AS A DEFENDANT IN A CRIMINAL PROCEEDING, OR CONVICTED, FINED OR IMPRISONED FOR THE VIOLATION OF ANY LAW (excluding minor traffic violations)?
      <br />
      If “yes”, give full particulars of each case in an attached statement. 
      </Typography>
      <FormControlLabel id="ever_arrested" name="ever_arrested" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="ever_arrested" name="ever_arrested" value="no" control={<Radio />} label="No" />
      <TextField
            id="ever_arrested_sec"
            name="ever_arrested_sec"
            label="Describe here"
            helperText="Describe When"
            margin="normal"
            multiline
            rows="2"
            fullWidth
          />
      </Grid>

      <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
      I certify that the statements made by me in answer to the foregoing questions are true, complete and correct to the best of my knowledge and belief.  I understand that any misrepresentation or material omission made on a Personal History form or other document requested by the Organization renders a staff member of the United Nations liable to termination or dismissal.
      </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant="subtitle2" gutterBottom>
     Date 
      </Typography>
      <TextField
            id="date_certify"
            name="date_certify"
            placeholder="Type Here"
            fullWidth
          />
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant="subtitle2" gutterBottom>
     Signature
      </Typography>
      <RaisedButton
      containerElement='label' 
      label='My Label'>
   <input type="file" />
</RaisedButton>
      </Grid>
     
          <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
          NB: You will be requested to supply documentary evidence which supports the statements you have made above.  Do not, however, send any documentary evidence until you have been asked to do so by the Organization and, in any event, do not submit the original texts of references or testimonials unless they have been obtained for the sole use of the Organization.
      </Typography>
          </Grid>
        
      </Grid>

      
    </React.Fragment>
  );
 }
}

P11Form9.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form9;
