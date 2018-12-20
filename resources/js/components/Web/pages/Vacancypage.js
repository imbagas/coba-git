import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import profilepic from '../../../../img/job.png';
import AlertRegister from '../common/AlertRegister';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  background: {
    background: 'linear-gradient(#be2126 20%, white 20% )',
},
mainfont:{
  fontFamily: 'barlow',
    },
  avatar: {
    margin: 10,
    alignItems:'center',
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    alignItems:'center',
  },
  paper: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
  },
  paperHeader: {
    padding: theme.spacing.unit * 2,
    textAlign:'justify',
    
  },
  card: {
    maxWidth: 'auto',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
    
  },
  content: {
   float: 'left',
  },
    button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  margin: {
    margin: theme.spacing.unit,
    textAlign: 'right',
    
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  jobimg: {
    position:'relative',
    borderWidth:1,
    borderRadius:100, 
    boxShadow:'1px 1px 1px'
  }
});

function Vacancypage(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      
    <Grid container alignItems="center" className={classes.background}>
    <Grid  container style={{margin:'5%'}} spacing={24} styles={{fontFamily:'barlow'}}>
    
    <Grid item xs={12} style={{textAlign:'right'}}>
    <AlertRegister />
   
    </Grid>
          <Grid item xs={12} sm={3}>
          <img src={profilepic} widht="200" height="200" className={classes.jobimg}/>
        </Grid>

        <Grid item xs={12} sm={9}>
        <Paper className={classes.paper}>
       <Typography variant="h4" style={{fontFamily:'barlow'}} >
       Port Expert Consultant - Technical Roster (66302)

      </Typography>
      <Divider />
      <p>Requisition #&nbsp;<strong>66302</strong>&nbsp;-&nbsp;Posted&nbsp;<strong>05/10/2018</strong>&nbsp;-&nbsp;<strong>Short Term Monthly</strong>&nbsp;-&nbsp;<strong>Europe, Western</strong>&nbsp;-&nbsp;<span id="mfield_mfield1" class="jobMFieldContent" tabindex="0" role="link">Working Job Language (1)</span>&nbsp;-&nbsp;<strong>LOGISTICS</strong></p>
      </Paper>
        </Grid>
        
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <p><strong>ABOUT THE ROLE</strong></p>
<p>We are building a Roster of Shipping and Port Operations experts that will be comprised of highly competent professionals from around the world who can play a key role in helping to support the achievement of zero hunger.</p>
<p>Under the direct supervision of the Country Director and/or Country Office&rsquo;s Head of Supply Chain and/or WFP Shipping Rome, the Port Captain will be responsible for the following duties:</p>
<ul>
<li>Gather continuously information on potential transport delays through to destination/port congestion to ensure WFP interests are fully covered, and share this information with the necessary/concerned offices in weekly reports.</li>
<li>Coordinate with WFP Shipping Agents/Port Authorities for prompt berthing and smooth load/discharge operations.</li>
<li>Oversee that proper documents are received and submitted to local Authorities prior to vessel arrival to ensure no delays in cargo clearance and vessel loading/discharging arrangements.</li>
<li>Liaise with WFP's cargo Superintendent company and/or Vessel's port representatives prior to vessel arrivals to protect WFP interests during vessel operations and to ensure full cargo quantity in good condition is always loaded/ discharged.</li>
<li>Review and be aware of WFP Superintendence arrangements to ensure adequate measures are in place for commodity quality control and any immediate actions can be taken to safeguard the commodities and WFP interest at all times.</li>
<li>Ascertain logistics reporting and monitoring of dispatches and deliveries and quality control, if required.</li>
<li>Liaise between ship&rsquo;s crew and shore resources to ensure max efficiency of cargo operation.</li>
<li>Ensure that all required documentation, such as SOF, Notice of Readiness, Letter of Protest etc. are submitted/accepted correctly as per C/P, and communicated to WFP Shipping Rome in timely manner. Assure a correct recording and timely submission of the Statement of Facts.</li>
<li>Report on a daily basis to the Head of Supply Chain and/or WFP Shipping Rome on vessel load/discharge and all relevant related information.</li>
<li>Monitor the performance of WFP contractors and report on their performances.</li>
<li>Keep shipping files in good order. Collect the tally and other related documents to the discharging operations. To do a proper tracking and recording of all incoming/outgoing WFP consignments and vessels.</li>
<li>Assure a proper loading/unloading operations and a correct stowage of the cargo on trucks/railroad wagons and storage in the warehouses.</li>
<li>Report immediately about loss and damages. Documentary support of such damages to be sent to WFP Risk Mitigation and Shipping Rome. Intervene in cases of damaged cargo and arrange for adequate inspections, sampling, testing and final settlement of disputed cargoes;</li>
<li>Ensure proper port/country/WFP procedures are strictly adhered to when disposing of spoiled commodities to avoid legal fines and/or penalties.</li>
<li>Inspect and monitor port warehouse activities and condition.&nbsp; Check stack count, stock rotation, cleanliness, insect control, roof condition etc. to ensure safe keeping of commodities in storage.</li>
<li>Participate in the development of further improvements in procedures, documentation and reporting of the WFP Operation;</li>
<li>Provide advice on Shipping related matters to WFP staff in country during the course of his/her assignment. Ensure the staff is properly briefed on the Standard Port Operation procedures and responsibilities of WFP Vessels/Stevedores/Superintendents and Forwarding Agents with clear understanding on the points where risk is transferred.</li>
<li>Follow up the rules and procedures described in the WFP Logistics Manual.&nbsp;</li>
<li>Perform any other related duties, if required or assigned by immediate Supervisor.</li>
</ul>
<p>&nbsp;</p>
<p><strong>DESIRED QUALIFICATIONS AND EXPERIENCE</strong></p>
<p><strong>Education:</strong></p>
<ul>
<li>University degree, preferably in Transport Economics&nbsp;<u>or</u>&nbsp;completion of Superior Maritime Institution, with relevant logistic qualifications&nbsp;<u>or</u>&nbsp;equivalent extensive logistics experience in Port and Shipping operations.</li>
</ul>
<p><strong>&nbsp; Experience:</strong></p>
<ul>
<li>At least 5 years of postgraduate professional experience in Port and International Shipping Operations.</li>
<li>Previous working experience with the UN or WFP&nbsp;and knowledge of WFP procedures&nbsp;are considered an asset.</li>
</ul>
<p><strong>Technical Skills &amp; Competencies:</strong></p>
<ul>
<li>Familiarity with international commodity trade practices.</li>
<li>Ability to plan and organise the work and to meet strict deadlines.</li>
<li>In-depth knowledge in port operations and technology, cargo and shipping documentation, C/P interpretation and shipping business.</li>
<li>Knowledge of computer software such as MS Office (i.e. Word, Excel and PowerPoint) and e-mail communications.</li>
<li>Ability to work productively and maintain effective working relationship with people of different national and cultural background.</li>
<li>Proven negotiation and organization skills.</li>
<li>Flexibility to interact in the supply chain.</li>
</ul>
<p><strong>&nbsp; Language:</strong></p>
<ul>
<li>Written and oral proficiency in English is necessary.</li>
<li>Knowledge of another official WFP language of the region/country is considered an asset.</li>
</ul>

<p><strong>TERMS AND CONDITIONS</strong></p>
<p>This vacancy announcement is not tied to any currently&nbsp;open position or any specific duty station. It is a Roster for qualified applicants to express their interest for future short-term&nbsp;Consultancy opportunities in Shipping and Port Operations.</p>
<p>All applications received will be reviewed and go through a selection process to asses relevant experience and qualifications. Applicants who meet the selection criteria may be contacted for further interviews or assessments&nbsp;and to confirm their interest and availability. Only successful shortlisted candidates will be contacted and considered for individual short-term&nbsp;Consultancy&nbsp;contracts when opportunities arise.</p>
<p>Please note that this is an ongoing Roster. Qualified applicants may be contacted in the upcoming 12 months on an as-needed basis.</p>
<p>WFP offers a competitive compensation package which will be determined by the contract type and selected candidate&rsquo;s qualifications and experience.&nbsp;Consultants are independent hires and cannot be simultaneously employed by WFP and receive income or honorarium from other organizations, governments, non-governmental organizations (NGOs) or other. In the event that the candidate considered is employed under regular staff contracts by another United Nations organization other forms of contractual agreements must be pursued.</p>
<p>Please visit&nbsp;<a href="http://www.wfp.org/">http://www.wfp.org</a>&nbsp;and click on: &ldquo;Our work&rdquo; and &ldquo;Countries&rdquo; to learn more about WFP&rsquo;s operations.</p>

<p align="center"><u><em>Female applicants and qualified applicants from developing countries are strongly encouraged to apply.</em></u></p>
<p><em>WFP has zero tolerance for discrimination and does not discriminate on the basis of HIV/AIDS status.</em></p>
<p><em>No appointment under any kind of contract will be offered to members of the UN Advisory Committee on Administrative and Budgetary Questions (ACABQ), International Civil Service Commission (ICSC), FAO Finance Committee, WFP External Auditor, WFP Audit Committee, Joint Inspection Unit (JIU) and other similar bodies within the United Nations system with oversight responsibilities over WFP, both during their service and within three years of ceasing that service.</em></p>
<p><strong>Ref.: VA#&nbsp;</strong><strong>66302</strong></p>
          </Paper>
        </Grid>
        
        </Grid>
        
      </Grid>


      </React.Fragment>
    
  );
}

Vacancypage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Vacancypage);