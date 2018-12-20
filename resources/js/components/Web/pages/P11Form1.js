import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import InputAdornment from '@material-ui/core/InputAdornment';
import { date, month, year, nationalities, maritalstatus, gender } from '../config/options'


class P11Form1 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    family_name: '',
    first_name: '',
    middle_name: '',
    maiden_name: '',
    birth_date: 18,
    birth_month: 'august',
    birth_year: 1999,
    birth_place: '',
    birth_nationality: 'Select Nationality',
    present_nationality: 'Select Nationality',
    sex:'',
    weight:'',
    height:'',
    marital_status: '' ,
    entry_un: '',
    // years: years
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
   let years = []

    for (var temp = year.min; temp <= year.max; temp++) {
      years.push(temp);
    }

    console.log('kkk',years)

   return (
    <React.Fragment>
    
      <Grid container spacing={24}>
      <Grid item xs={12} sm={3} >
      <TextField
            required
            id="family_name"
            name="family_name"
            label="Family name"
            defaultValue=""
            fullWidth
            autoComplete="familyname"
            helperText="Type your family name"
          />
      </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="first_name"
            name="first_name"
            label="First name"
            defaultValue=""
            fullWidth
            autoComplete="firstname"
            helperText="Type your first name"
          />
          
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="middle_name"
            name="middle_name"
            label="Middle Name"
            defaultValue=""
            fullWidth
            autoComplete="midname"
            helperText="Type your middle name"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="maiden_name"
            name="maiden_name"
            label="Maiden name"
            defaultValue=""
            fullWidth
            autoComplete="maidenname"
            helperText="*If Any"
          />
          
        </Grid>
        <Grid  item xs={12} sm={2}>
        <TextField
          required
          id="birth_date"
          select
          label="Birth Date"
          value={this.state.birth_date}
          onChange={{}}
          helperText="Birth Date"
          margin="normal"
          fullWidth
        >
            { date.map((date, index) => (
           
           <MenuItem key={index} value={date}>
             {date}
           </MenuItem>
           
         ))
         }
        </TextField>
       </Grid>

     <Grid  item xs={12} sm={2} >
        <TextField
          required
          id="birth_month"
          select
          label="Birth Month"
          value={this.state.birth_month}
          onChange={{}}
          helperText="Birth Month"
          margin="normal"
          fullWidth
        >
           { month.map((month, index) => (
           
           <MenuItem key={index} value={month}>
             {month}
           </MenuItem>
           
         ))
         }
        </TextField>
       </Grid>

         <Grid  item xs={12} sm={2}>
        <TextField
          required
          id="birth_year"
          select
          label="Birth Year"
          value={this.state.birth_year}
          onChange={{}}
          helperText="Birth Year"
          margin="normal"
          fullWidth
        >
         { years.map((year1, index) => (
           
            <MenuItem key={index} value={year1}>
              {year1}
            </MenuItem>
            
          ))
          }
        </TextField>
       </Grid>

       <Grid  item xs={12} sm={6}>
       <TextField
            required
            id="birth_place"
            name="birth_place"
            label="Birth Place"
            helperText="Type your Birth Place"
            margin="normal"
            fullWidth
          />
       </Grid>
       
      <Grid item xs={12} sm={3}>
      <TextField
          required
          id="birth_nationality"
          select
          label="Birth Nationality"
          value={this.state.birth_nationality}
          onChange={{}}
          helperText="Please Select Birth Nationality"
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
        </Grid>
        <Grid item xs={12} sm={3}>
      <TextField
          required
          id="present_nationality"
          select
          label="Present Nationality"
          value={this.state.present_nationality}
          onChange={{}}
          helperText="Please Select Present Nationality"
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
        </Grid>
      
        <Grid item xs={12} sm={2}>
        <TextField
            required
            id="sex"
            select
            name="sex"
            label="Select Gender"
            fullWidth
            margin="normal"
            helperText="Please Select Your Gender"
            value={this.state.sex}
          >
          { gender.map((gender, index) => (
           
           <MenuItem key={index} value={gender}>
             {gender}
           </MenuItem>
           
         ))
         }
        </TextField>
        </Grid>

         <Grid item xs={12} sm={2}>
         <TextField
          required
          label="Weight"
          id="weight"
          name="weight"
          margin="normal"
          helperText="Please type Your Weight"
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />
        </Grid>

         <Grid item xs={12} sm={2}>
         <TextField
          required
          label="Height"
          id="height"
          name="height"
          margin="normal"
          helperText="Please type Your Height"
          InputProps={{
          startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
          }}
        />
        </Grid>
       
          <Grid item xs={12} sm={3}>
          <TextField
            required
            id="marital_status"
            select
            name="marital_status"
            label="Marital Status"
            margin="normal"
            helperText="Please select your marital status"
            fullWidth
            value={this.state.marital_status}
          >
          { maritalstatus.map((maritalstatus, index) => (
           
           <MenuItem key={index} value={maritalstatus}>
             {maritalstatus}
           </MenuItem>
           
         ))
         }
        </TextField>
          </Grid>
       
        <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>
        Entry into United Nations service might require assignment and travel to any area of the world in which the United Nations might have responsibilities.  Have you any disabilities which might limit your prospective field of work or your ability to engage in air travel?  
      </Typography>
      <FormControlLabel id="entry_un" value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel id="entry_un" value="no" control={<Radio />} label="No" />
        </Grid>
       
       
      </Grid>
    </React.Fragment>
  );
 }
}

P11Form1.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form1;
