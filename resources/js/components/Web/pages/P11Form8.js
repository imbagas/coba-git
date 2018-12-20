import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

class P11Form8 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    objections_inquiries: '',
    permament_civil_servant: '',
    permament_civil_servant_desc: '',
    refrence1_name: '',
    refrence1_address: '',
    refrence1_bussines: '',
    refrence2_name: '',
    refrence2_address: '',
    refrence2_bussines: '',
    refrence3_name: '',
    refrence3_address: '',
    refrence3_bussines: '',
    state_relevant_fact: '',
    
   
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
      HAVE YOU ANY OBJECTIONS TO OUR MAKING INQUIRIES OF YOUR PRESENT EMPLOYER ?  
      </Typography>
      <FormControlLabel id="objections_inquiries" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="objections_inquiries" value="no" control={<Radio />} label="No" />
      </Grid>
      <Grid item xs={12}>
      <Typography variant="subtitle2" gutterBottom>
      ARE YOU NOW, OR HAVE TO EVER BEEN, A PERMANENT CIVIL SERVANT IN YOUR GOVERNMENT’S EMPLOY ?  
      <br />
      *If answer is “yes”, WHEN?  
      </Typography>
      <FormControlLabel id="permament_civil_servant" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="permament_civil_servant" value="no" control={<Radio />} label="No" />
      <TextField
            id="permament_civil_servant_desc"
            name="permament_civil_servant_desc"
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
      REFERENCES: List three persons, not related to you, who are familiar with your character and qualifications.
      <br />
      Do not repeat names of supervisors listed on Employement Record.
      </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
            id="refrence1_name"
            name="refrence1_name"
            label="Full Name"
            defaultValue=""
            fullWidth
          />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence1_address"
           name="refrence1_address"
           label="Full Address"
           defaultValue=""
           fullWidth
         />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence1_bussines"
           name="refrence1_bussines"
           label="Bussines or Occupation"
           defaultValue=""
           fullWidth
         />
         </Grid>

          <Grid item xs={12} sm={4}>
      <TextField
            id="refrence2_name"
            name="refrence2_name"
            label="Full Name"
            defaultValue=""
            fullWidth
          />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence2_address"
           name="refrence2_address"
           label="Full Address"
           defaultValue=""
           fullWidth
         />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence2_bussines"
           name="refrence2_bussines"
           label="Bussines or Occupation"
           defaultValue=""
           fullWidth
         />
         </Grid>

          <Grid item xs={12} sm={4}>
      <TextField
            id="refrence3_name"
            name="refrence3_name"
            label="Full Name"
            defaultValue=""
            fullWidth
          />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence3_address"
           name="refrence3_address"
           label="Full Address"
           defaultValue=""
           fullWidth
         />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
           
           id="refrence3_bussines"
           name="refrence3_bussines"
           label="Bussines or Occupation"
           defaultValue=""
           fullWidth
         />
         </Grid>

          <Grid item xs={12}>
          <Typography variant="subtitle2" gutterBottom>
          STATE ANY OTHER RELEVANT FACTS, INCLUDING INFORMATION REGARDING ANY RESIDENCE OUTSIDE THE COUNTRY OF YOUR NATIONALITY
      </Typography>
          </Grid>
          <Grid item xs={12}>
          <TextField
           id="state_relevant_fact"
           name="state_relevant_fact"
           label=""
           placeholder="Type here"
           multiline
           rows="3"
           fullWidth
         />
         </Grid>
      </Grid>

      
    </React.Fragment>
  );
 }
}

P11Form8.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form8;
