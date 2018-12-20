import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


class P11Form5 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    wpm_english_typing: '',
    wpm_english_shorthand: '',
    wpm_french_typing: '',
    wpm_french_shorthand: '',
    wpm_other_language_typing: '',
    wpm_other_language_shorthand: '',
    equipment: '',  
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
      <Typography variant="subtitle2">
        For clerical grades only Indicate speed in words per minute : 
      </Typography>
      </Grid>
        <Grid item xs={12} >
        <Typography variant="subtitle2">
        English 
      </Typography>
         </Grid>
         <Grid item xs={12}>
      
      <TextField
          id="wpm_english_typing"
          placeholder="Typing Speed"
          margin="normal"
          helperText="WPM (Word per minute)"
        />
        &nbsp; &nbsp;
      <TextField
          id="wpm_english_shorthand"
          placeholder="Shorthand Speed"
          margin="normal"
          helperText="WPM (Word per minute)"
        />
        </Grid>
      
        <Grid item xs={12} >
        <Typography variant="subtitle2">
        French 
      </Typography>
         </Grid>
         <Grid item xs={12}>
         
      <TextField
          id="wpm_french_typing"
          placeholder="Typing Speed"
          margin="normal"
          helperText="WPM (Word per minute)"
        />
     &nbsp; &nbsp;
   
      <TextField
          id="wpm_french_shorthand"
          placeholder="Shorthand speed"
          margin="normal"
          helperText="WPM (Word per minute)"
         
        />
     
        </Grid>
       
        
        <Grid item xs={12} >
        <Typography variant="subtitle2">
        Other Language  
      </Typography>
         </Grid>
         <Grid item xs={12} >
        
      <TextField
          id="wpm_other_language_typing"
          placeholder="Typing Speed"
          margin="normal"
          helperText="WPM (Word per minute)"
         
        />
        &nbsp; &nbsp;
      <TextField
          id="wpm_other_language_shorthand"
          placeholder="Shorthand Speed"
          margin="normal"
          helperText="WPM (Word per minute)"
         
        />
     
     
        </Grid>
     
         <Grid item xs={12} sm={6}>
         <TextField
          id="equipment"
          name="equipment"
          label="List any office machines or equipment you can use"
          multiline
          rows="4"
          fullWidth
          margin="normal"
        />
     
     
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
 }
}

P11Form5.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form5;
