import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class TextFieldsEdit3 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    birth_date: '',
    birth_nationality: '',
    present_nationality: '',
    sex: '',
    relationship: '',
   
   };

   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
  this.setState({
    currency: event.target.value,
  });
 }

 render() {
   const { classes } = this.props;
   return (
    <React.Fragment>
     <Typography variant="h4" gutterBottom style={{fontFamily:'barlow'}}>
            Personal Data &nbsp;
            </Typography>
      <Grid container spacing={24}>
     
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="birth_date"
            name="birth_date"
            label="Birth Date"
            defaultValue=" 08-30-1992"
            fullWidth
            autoComplete="fname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="birth_nationality"
            name="birth_nationality"
            label="Birth Nationality"
            defaultValue="03221312"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="present_nationality"
            name="present_nationality"
            label="Present Nationality"
            defaultValue="California"
            fullWidth
            autoComplete="lname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="sex"
            name="sex"
            label="Sex"
            defaultValue="Male"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="relationship"
            name="relationship"
            label="Relationship"
            defaultValue="Single"
            fullWidth
            autoComplete="lname"
          />
          
        </Grid>
    
        <Grid item xs={12} style={{textAlign:'center'}}>
        <Button variant="contained">
        Submit
      </Button>
      </Grid>
      </Grid>
    </React.Fragment>
  );
 }
}

TextFieldsEdit3.propTypes = {
classes: PropTypes.object.isRequired,
};

export default TextFieldsEdit3;
