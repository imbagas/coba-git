import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { nationalities, typeofcontracts, areaofexpertises } from '../config/options'

class TextFields extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    country: '',
    areaofexpertise: '',
    typeofcontract: '',
   };

   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event,event2,event3) {
  this.setState({
    country: event.target.value,
    areaofexpertise: event2.target.value,
    typeofcontract: event3.target.value,
  });
 }

 render() {
   const { classes } = this.props;
   return (
    <React.Fragment>
        <Grid item xs={12} sm={8}>
      <TextField
          id="country"
          select
          label="Country"
          value={this.state.country}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        >
          { nationalities.map((nationalities, index) => (
           
           <MenuItem key={index} value={nationalities}>
             {nationalities}
           </MenuItem>
           
         ))
         }
       
        </TextField>
        <br />
        <TextField
          id="areaofexpertise"
          select
          label="Area of Expertise"
          value={this.state.areaofexpertise}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        >  { areaofexpertises.map((areaofexpertise, index) => (
           
          <MenuItem key={index} value={areaofexpertise}>
            {areaofexpertise}
          </MenuItem>
          
        ))
        }
        </TextField>
        <br />
         <TextField
          id="typeofcontract"
          select
          label="Type of Contract"
          value={this.state.typeofcontract}
          onChange={this.handleChange}
          margin="normal"
          fullWidth
        >
         { typeofcontracts.map((typeofcontracts, index) => (
           
           <MenuItem key={index} value={typeofcontracts}>
             {typeofcontracts}
           </MenuItem>
           
         ))
         }
        </TextField>
        <br />
        <br />
        <Button  variant="contained" color="secondary" style={{backgroundColor:'#be2126'}}>
        Filter Vacancies
      </Button>
        </Grid>
     
       
   
    </React.Fragment>
  );
 }
}

TextFields.propTypes = {
classes: PropTypes.object.isRequired,
};

export default TextFields;
