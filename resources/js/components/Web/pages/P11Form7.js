import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


class P11Form7 extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    professional_societies_activities: '',
    significant_publications: '',
    present_position_attend_from: '',
    present_position_attend_to: '',
    present_salaries_start: '',
    present_salaries_final: '',
    present_exact_title: '',
    present_employer_name: '',
    present_business_type: '',
    present_employer_address: '',
    present_supervisor_name: '',
    present_supervisor_no: '',
    present_leaving_reason: '',
    present_duties: '',
    previous1_position_attend_from: '',
    previous1_position_attend_to: '',
    previous1_salaries_start: '',
    previous1_salaries_final: '',
    previous1_exact_title: '',
    previous1_employer_name: '',
    previous1_business_type: '',
    previous1_employer_address: '',
    previous1_supervisor_name: '',
    previous1_supervisor_no: '',
    previous1_leaving_reason: '',
    previous1_duties: '',
    previous2_position_attend_from: '',
    previous2_position_attend_to: '',
    previous2_salaries_start: '',
    previous2_salaries_final: '',
    previous2_exact_title: '',
    previous2_employer_name: '',
    previous2_business_type: '',
    previous2_employer_address: '',
    previous2_supervisor_name: '',
    previous2_supervisor_no: '',
    previous2_leaving_reason: '',
    previous2_duties: '',
   
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
      LIST PROFESSIONAL SOCIETIES AND ACTIVITIES IN CIVIC, PUBLIC OR INTERNATIONAL AFFAIRS
      </Typography>
      <TextField
          id="professional_societies_activities"
          placeholder="Type here"
          margin="normal"
          multiline
          rows="4"
          fullWidth
          helperText=" LIST PROFESSIONAL SOCIETIES AND ACTIVITIES IN CIVIC, PUBLIC OR INTERNATIONAL AFFAIRS"
         
        />
      </Grid>

      <Grid item xs={12}>
      <Typography variant="subtitle2" style={{textAlign:'justify'}}>
       LIST ANY SIGNIFICANT PUBLICATIONS YOU HAVE WRITTEN (do not attach)
      </Typography>
      <TextField
          id="significant_publications"
          placeholder="Type here"
          margin="normal"
          multiline
          rows="4"
          fullWidth
          helperText="LIST ANY SIGNIFICANT PUBLICATIONS YOU HAVE WRITTEN (do not attach)"
         
        />
      </Grid>

       <Grid item xs={12}>
      <Typography variant="subtitle2" style={{textAlign:'justify'}}>
      EMPLOYMENT RECORD: Starting with your present post, list in reverse order every employment you have had.  Use a separate block for each post.  Include also service in the armed forces and note any period during which you were not gainfully employed. If you need more space, attach additional pages of the same size.  Give both gross and net salaries per annum for your last or present post.
      </Typography>
      <br />
      <Typography variant="subtitle" style={{textAlign:'justify'}}>
      A. PRESENT POST (LAST POST, IF NOT PRESENTLY IN EMPLOYMENT)
      </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="present_position_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018 "
         
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="present_position_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
         
        />
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         SALARIES PER ANNUM
      </Typography>
      <TextField
          id="present_salaries_start"
          placeholder="Starting"
          margin="normal"
          helperText="ex: $1.000 "
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="present_salaries_final"
          placeholder="Final"
          margin="normal"
          helperText="ex: $1.000"
          
        />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
            id="present_exact_title"
            name="present_exact_title"
            label="EXACT TITLE OF YOUR POST"
            helperText="EXACT TITLE OF YOUR POST"
            margin="normal"
            fullWidth
          />
        </Grid>

           <Grid item xs={12} sm={4}>
        <TextField
            id="present_employer_name"
            name="present_employer_name"
            label="NAME OF EMPLOYER"
            helperText="NAME OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={4}>
        <TextField
            id="present_business_type"
            name="present_business_type"
            label="TYPE OF BUSINESS"
            helperText="TYPE OF BUSINESS"
            margin="normal"
            fullWidth
          />
        </Grid>

          <Grid item xs={12} sm={6}>
        <TextField
            id="present_employer_address"
            name="present_employer_address"
            label="ADDRESS OF EMPLOYER"
            helperText="ADDRESS OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="present_supervisor_name"
            name="present_supervisor_name"
            label="NAME OF SUPERVISOR"
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
            id="present_supervisor_no"
            name="present_supervisor_no"
            label="NO. AND KIND OF EMPLOYEES
            SUPERVISED BY YOU:"
            helperText="NO. AND KIND OF EMPLOYEES SUPERVISED BY YOU"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="present_leaving_reason"
            name="present_leaving_reason"
            label="REASON FOR LEAVING"
            helperText="Reason For Leaving"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={12}>
        <TextField
            id="present_duties"
            name="present_duties"
            label="DESCRIPTION OF YOUR DUTIES"
            helperText="Description of your Duties"
            margin="normal"
            multiline
            rows="4"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
        <Typography variant="subtitle" gutterBottom>
        B. PREVIOUS POSTS (IN REVERSE ORDER)
      </Typography>
        </Grid>
      <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="previous1_position_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018 "
         
        /> 
       &nbsp;   &nbsp;

      <TextField
          id= "previous1_position_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
         
        />
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         SALARIES PER ANNUM
      </Typography>
      <TextField
          id="previous1_salaries_start"
          placeholder="Starting"
          margin="normal"
          helperText="ex: $1.000 "
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="previous1_salaries_final"
          placeholder="Final"
          margin="normal"
          helperText="ex: $1.000"
          
        />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
            id="previous1_exact_title"
            name="previous1_exact_title"
            label="EXACT TITLE OF YOUR POST"
            helperText="EXACT TITLE OF YOUR POST"
            margin="normal"
            fullWidth
          />
        </Grid>

           <Grid item xs={12} sm={4}>
        <TextField
            id="previous1_employer_name"
            name="previous1_business_type"
            label="NAME OF EMPLOYER"
            helperText="NAME OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={4}>
        <TextField
            id="previous1_business_type"
            name="previous1_business_type"
            label="TYPE OF BUSINESS"
            helperText="TYPE OF BUSINESS"
            margin="normal"
            fullWidth
          />
        </Grid>

          <Grid item xs={12} sm={6}>
        <TextField
            id="previous1_employer_address"
            name="previous1_employer_address"
            label="ADDRESS OF EMPLOYER"
            helperText="ADDRESS OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="previous1_supervisor_name"
            name="previous1_supervisor_name"
            label="NAME OF SUPERVISOR"
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
            id="previous1_supervisor_no"
            name="previous1_supervisor_no"
            label="NO. AND KIND OF EMPLOYEES
            SUPERVISED BY YOU:"
            helperText="NO. AND KIND OF EMPLOYEES SUPERVISED BY YOU"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="previous1_leaving_reason"
            name="previous1_leaving_reason"
            label="REASON FOR LEAVING"
            helperText="Reason For Leaving"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={12}>
        <TextField
            id="previous1_duties"
            name="previous1_duties"
            label="DESCRIPTION OF YOUR DUTIES"
            helperText="Description of your Duties"
            margin="normal"
            multiline
            rows="4"
            fullWidth
          />
        </Grid>

       <Grid item xs={12} >
       <Typography variant="subtitle2" gutterBottom>
         Previous Post #2
      </Typography>
       </Grid>
        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         ATTENDED FROM/TO
      </Typography>
      <TextField
          id="previous2_position_attend_from"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018 "
         
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="previous2_position_attend_to"
          placeholder="Mo./Year"
          margin="normal"
          helperText="ex: January 2018"
         
        />
        </Grid>

        <Grid item xs={12} sm={6}>
         <Typography variant="subtitle2" gutterBottom>
         SALARIES PER ANNUM
      </Typography>
      <TextField
          id="previous2_salaries_start"
          placeholder="Starting"
          margin="normal"
          helperText="ex: $1.000 "
          
        /> 
       &nbsp;   &nbsp;

      <TextField
          id="previous2_salaries_final"
          placeholder="Final"
          margin="normal"
          helperText="ex: $1.000"
          
        />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
            id="previous2_exact_title"
            name="previous2_exact_title"
            label="EXACT TITLE OF YOUR POST"
            helperText="EXACT TITLE OF YOUR POST"
            margin="normal"
            fullWidth
          />
        </Grid>

           <Grid item xs={12} sm={4}>
        <TextField
            id="previous2_employer_name"
            name="previous2_employer_name"
            label="NAME OF EMPLOYER"
            helperText="NAME OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={4}>
        <TextField
            id="previous2_business_type"
            name="previous2_business_type"
            label="TYPE OF BUSINESS"
            helperText="TYPE OF BUSINESS"
            margin="normal"
            fullWidth
          />
        </Grid>

          <Grid item xs={12} sm={6}>
        <TextField
            id="previous2_employer_address"
            name="previous2_employer_address"
            label="ADDRESS OF EMPLOYER"
            helperText="ADDRESS OF EMPLOYER"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="previous2_supervisor_name"
            name="previous2_supervisor_name"
            label="NAME OF SUPERVISOR"
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
            id="previous2_supervisor_no"
            name="previous2_supervisor_no"
            label="NO. AND KIND OF EMPLOYEES
            SUPERVISED BY YOU:"
            helperText="NO. AND KIND OF EMPLOYEES SUPERVISED BY YOU"
            margin="normal"
            fullWidth
          />
        </Grid>


          <Grid item xs={12} sm={6}>
        <TextField
            id="previous2_leaving_reason"
            name="previous2_leaving_reason"
            label="REASON FOR LEAVING"
            helperText="Reason For Leaving"
            margin="normal"
            fullWidth
          />
        </Grid>

         <Grid item xs={12} sm={12}>
        <TextField
            id="previous2_duties"
            name="previous2_duties"
            label="DESCRIPTION OF YOUR DUTIES"
            helperText="Description of your Duties"
            margin="normal"
            multiline
            rows="4"
            fullWidth
          />
        </Grid>
      </Grid>

      
    </React.Fragment>
  );
 }
}

P11Form7.propTypes = {
classes: PropTypes.object.isRequired,
};

export default P11Form7;
