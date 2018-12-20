import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class TextFieldsEdit2 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    telephone: '',
    mobile: '',
    Country: '',
    email: '',
    location: '',
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
            Contact &nbsp;
            </Typography>
      <Grid container spacing={24}>
     
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="telephone"
            name="telephone"
            label="Telephone"
            defaultValue="08123412"
            fullWidth
            autoComplete="fname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="mobile"
            name="mobile"
            label="Mobile"
            defaultValue="03221312"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="Country"
            name="Country"
            label="Country"
            defaultValue="California"
            fullWidth
            autoComplete="lname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            defaultValue="tes@mail.com"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="location"
            name="location"
            label="Location"
            defaultValue="Street No 1"
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

TextFieldsEdit2.propTypes = {
classes: PropTypes.object.isRequired,
};

export default TextFieldsEdit2;
