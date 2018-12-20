import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class P11Form6 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    university1: '',
    university1_attend_from: '',
    university1_attend_to: '',
    university1_degree_obtained: '',
    university1_main_study: '',
    university2: '',
    university2_attend_from: '',
    university2_attend_to: '',
    university2_degree_obtained: '',
    university2_main_study: '',
    university3: '',
    university3_attend_from: '',
    university3_attend_to: '',
    university3_degree_obtained: '',
    university3_main_study: '',
    school1: '',
    school1_type: '',
    school1_attend_from: '',
    school1_attend_to: '',
    school1_obtained: '',
    school2: '',
    school2_type: '',
    school2_attend_from: '',
    school2_attend_to: '',
    school2_obtained: '',
    school3: '',
    school3_type: '',
    school3_attend_from: '',
    school3_attend_to: '',
    school3_obtained: '',
   
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
      <Typography variant="subtitle2" style={{textAlign:'justify'}}>
      EDUCATIONAL.  Give full details - N.B. Please give exact titles of degrees in original language. <br/>
      A. UNIVERSITY OR EQUIVALENT      Please do not translate or equate to other degrees.
      </Typography>
      </Grid>
         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         #1 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="university1"
          placeholder="Name, Place, Country"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country"
         
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="university1_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          InputLabelProps={{
            shrink: true,
          }}
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="university1_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        />
        </Grid>
       
        <br />
         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         DEGREES and ACADEMIC DISTINCTIONS OBTAINED
       </Typography>
      <TextField
          id="University1_degree_obtained"
          placeholder="Degrees and Acamedic"
          margin="normal"
          fullWidth
          helperText="Degrees and Acamedic"
         
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         MAIN COURSE OF STUDY
       </Typography>
      <TextField
          id="university1_main_study"
          placeholder="Main Course of Study"
          margin="normal"
          fullWidth
          helperText="Main Course of Study"
         
        />
     
        </Grid>
       
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
       #2 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="university2"
          placeholder="Name, Place, Country 2"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country 2"
         
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="university2_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
         
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="university2_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </Grid>
       
        <br />
         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         DEGREES and ACADEMIC DISTINCTIONS OBTAINED
       </Typography>
      <TextField
          id="university2_degree_obtained"
          placeholder="Degrees and Acamedic"
          margin="normal"
          fullWidth
          helperText="Degrees and Acamedic"
          
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         MAIN COURSE OF STUDY
       </Typography>
      <TextField
          id="university2_main_study"
          placeholder="Main Course of Study"
          margin="normal"
          fullWidth
          helperText="Main Course of Study"
          
        />
     
        </Grid>

         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
       #3 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="university3"
          placeholder="Name, Place, Country 2"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country 2"
         
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="university3_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018 "
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="university3_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        />
        </Grid>
       
        <br />
         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         DEGREES and ACADEMIC DISTINCTIONS OBTAINED
       </Typography>
      <TextField
          id="university3_degree_obtained"
          placeholder="Degrees and Acamedic"
          margin="normal"
          fullWidth
          helperText="Degrees and Acamedic"
          
        />
     
        </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         MAIN COURSE OF STUDY
       </Typography>
      <TextField
          id="university3_main_study"
          placeholder="Main Course of Study"
          margin="normal"
          fullWidth
          helperText="Main Course of Study"
          
        />
     
        </Grid>

         <Grid item xs={12}>
      <Typography variant="subtitle2" style={{textAlign:'justify'}}>
      B. SCHOOLS OR OTHER FORMAL TRAINING OR EDUCATION FROM AGE 14 (e.g. high school, technical school or apprenticeship)
      </Typography>
      </Grid>
         <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         #1 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="school1"
          placeholder="Name, Place, Country"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         TYPE
       </Typography>
      <TextField
          id="school1_type"
          placeholder="Type"
          margin="normal"
          fullWidth
          helperText="Type"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="school1_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="school1_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
         
        />
        </Grid>
       
        <br />
        
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         CERTIFICATES OR DIPLOMAS OBTAINED
       </Typography>
      <TextField
          id="school1_obtained"
          placeholder="Certificates or diploma obtained"
          margin="normal"
          fullWidth
          helperText="Certificates or diploma obtained"
          
        />
     
        </Grid>
       
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         #2 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="school2"
          placeholder="Name, Place, Country"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         TYPE
       </Typography>
      <TextField
          id="school2_type"
          placeholder="Type"
          margin="normal"
          fullWidth
          helperText="Type"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="school2_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="school2_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        />
        </Grid>
       
        <br />
        
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         CERTIFICATES OR DIPLOMAS OBTAINED
       </Typography>
      <TextField
          id="school2_obtained"
          placeholder="Certificate or diplomas obtained"
          margin="normal"
          fullWidth
          helperText="Certificate or diplomas obtained"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         #3 NAME, PLACE AND COUNTRY
       </Typography>
      <TextField
          id="school3"
          placeholder="Name, Place, Country"
          margin="normal"
          fullWidth
          helperText="Name, Place, Country"
          
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         TYPE
       </Typography>
      <TextField
          id="school3_type"
          placeholder="Type"
          margin="normal"
          fullWidth
          helperText="Type"
          
         
        />
     
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="school3_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="school3_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
          
        />
        </Grid>
       
        <br />
        
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2">
         CERTIFICATES OR DIPLOMAS OBTAINED
       </Typography>
      <TextField
          id="school3_obtained"
          placeholder="Certificates or diplomas obtained"
          margin="normal"
          fullWidth
          helperText="Certificates or diplomas obtained"
         
        />
     
        </Grid>
      </Grid>

      
    </React.Fragment>
  );
 }
}

P11Form6.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form6;
