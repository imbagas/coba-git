import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

class P11Form4 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    preferred_work: '',
    less_six_month: '',
    un_previously: '',
    other_language1: '',
    other_language1_read: '',
    other_language1_write: '',
    other_language1_speak: '',
    other_language1_understand: '',
    other_language2: '',
    other_language2_read: '',
    other_language2_write: '',
    other_language2_speak: '',
    other_language2_understand: '',
    other_language3: '',
    other_language3_read: '',
    other_language3_write: '',
    other_language3_speak: '',
    other_language3_understand: '',


   
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
      What is your preferred field of work?
      </Typography>
      <TextField
          id="preferred_work"
          placeholder="Describe here"
          multiline
          rows="2"
          fullWidth
          margin="normal"
         
        />
      </Grid>
      <Grid item xs={12} >
      <Typography variant="subtitle2">
        Would you accept employment for less than six months
      </Typography>
       <FormControlLabel id="less_six_month" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="less_six_month" value="no" control={<Radio />} label="No" /> 
      </Grid>
      <Grid item xs={12} >
      <Typography variant="subtitle2">
      Have you previously submitted an application for employment with U.N.? if so when?
      </Typography>
      <TextField
          id="un_previously"
          placeholder="Describe here"
          multiline
          rows="2"
          fullWidth
          margin="normal"
         
        />
      </Grid>
     
        <Grid item xs={12} >
        <Typography variant="subtitle2">
      KNOWLEDGE OF LANGUAGES.  What is your mother tongue?   
      </Typography>
        <TextField
          id="other_language1"
          placeholder="Other Languange"
          margin="normal"
          
        />
         </Grid>
         <Grid item xs={12} sm={3}>
         <Typography variant="subtitle2" gutterBottom>
            Read 
      </Typography>
      <FormControlLabel id="other_language1_read" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language1_read" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Write 
      </Typography>
      <FormControlLabel id="other_language1_write" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language1_write" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Speak 
      </Typography>
      <FormControlLabel id="other_language1_speak" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language1_speak" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Understand
      </Typography>
      <FormControlLabel id="other_language1_understand" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language1_understand" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <br />
        <Grid item xs={12} >
        <TextField
          id="other_language2"
          placeholder="Other Languange 2"
          margin="normal"
         
        />
         </Grid>
         <Grid item xs={12} sm={3}>
         <Typography variant="subtitle2" gutterBottom>
            Read 
      </Typography>
      <FormControlLabel id="other_language2_read" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language2_read" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Write 
      </Typography>
      <FormControlLabel id="other_language2_write" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language2_write" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Speak 
      </Typography>
      <FormControlLabel id="other_language2_speak" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language2_speak" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Understand
      </Typography>
      <FormControlLabel id="other_language2_understand" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language2_understand" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} >
        <TextField
          id="other_language3"
          placeholder="Other Languange 3"
          margin="normal"
          
        />
         </Grid>
         <Grid item xs={12} sm={3}>
         <Typography variant="subtitle2" gutterBottom>
            Read 
      </Typography>
      <FormControlLabel id="other_language3_read" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language3_read"  value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Write 
      </Typography>
      <FormControlLabel id="other_language3_write"  value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language3_write" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Speak 
      </Typography>
      <FormControlLabel id="other_language3_speak" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language3_speak" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
        <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
            Understand
      </Typography>
      <FormControlLabel id="other_language3_understand" value="Easy" control={<Radio />} label="Easy" />
      <FormControlLabel id="other_language3_understand" value="Not Easy" control={<Radio />} label="Not Easy" /> 
     
        </Grid>
      </Grid>
    </React.Fragment>
  );
 }
}

P11Form4.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form4;
