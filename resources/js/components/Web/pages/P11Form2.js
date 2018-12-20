import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import FieldArray from '../common/FieldArray'

class P11Form2 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    permanent_address: '',
    permanent_telephone: '',
    present_address: '',
    present_telephone: '',
    office_telephone: '',
    office_email: '',
   
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
      <Grid item xs={12} sm={6} >
      <TextField
            required
            id="permanent_address"
            name="permanent_address"
            label="Permanent Address"
            defaultValue=""
            fullWidth
            autoComplete="permanent_address"
          />
           <TextField
            id="permanent_telephone"
            name="permanent_telephone"
            label="Telephone no"
            defaultValue=""
            fullWidth
            autoComplete="permanent_telephone"
            helperText="Permanent Address Telephone"
          />
      </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="present_address"
            name="present_address"
            label="Present Address"
            defaultValue=""
            fullWidth
            autoComplete="present_address"
          />
            <TextField
            id="present_telephone"
            name="present_telephone"
            label="Telephone no / Fax"
            defaultValue=""
            fullWidth
            autoComplete="present_telephone"
            helperText="Present Address Telephone / Fax"
          />
          
          
        </Grid>
       
        <Grid item xs={12} sm={6}>
        <TextField
            id="office_telephone"
            name="office_telephone"
            label="Office Telephone / Fax"
            defaultValue=""
            fullWidth
            autoComplete="office_telephone"
            helperText="Office Telephone / Fax"
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            id="office_email"
            name="office_email"
            type="email"
            label="Office Email"
            defaultValue=""
            fullWidth
            autoComplete="office_email"
            helperText="Office Email"
          />
        </Grid>
        <Grid item xs={12}>
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

P11Form2.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form2;
