import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import profilepic from'../../../../img/1.jpg';
import Button from '@material-ui/core/Button';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
};

class TextFieldsEdit extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    first_name: '',
    city: '',
    middle_name: '',
    country: '',
    last_name: '',
    description: '',
    
    
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
    
      <Grid container spacing={24}>
      <Grid item xs={12} sm={3} >
      <Avatar alt="Remy Sharp" src={profilepic} style={{width: 120, height: 120}} />
      <br />
      <input type="file" />
      </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="first_name"
            name="first_name"
            label="First name"
            defaultValue="Remy"
            fullWidth
            autoComplete="fname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="city"
            name="city"
            label="City"
            defaultValue="Hotel California"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="middle_name"
            name="middle_name"
            label="Middle Name"
            defaultValue="Sharp"
            fullWidth
            autoComplete="lname"
          />
          <br />
          <br />
          <Grid item xs={12} >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            defaultValue="United States"
            fullWidth
            autoComplete="lname"
          />
         
        </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="last_name"
            name="last_name"
            label="Last name"
            defaultValue=""
            fullWidth
            autoComplete="lname"
          />
          
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="description"
            name="description"
            label="Description"
            defaultValue="Graduated from Boston University"
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

TextFieldsEdit.propTypes = {
classes: PropTypes.object.isRequired,
};

export default TextFieldsEdit;
