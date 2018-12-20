import React from 'react'
import banner from '../../../../img/banner.jpg';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import FadeMenu from '../common/FadeMenu'
import SimpleCard from '../common/SimpleCard'


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  navLink: {
    textDecoration: 'none'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    textAlign: 'center',
    backgroundColor: '#be2126',
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
      
    },
  },

  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  midbanner: {
    background: 'rgba(0,0,0,0.5)',
    position:'absolute', 
    width:'100%',
    bottom:'0', 
    fontSize:'4em',
    textAlign:'center', 
    color:'#fff', 
    paddingTop:'30px',
    paddingBottom:'30px', 
    fontWeight:'80%'
  }
});

function Home (props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <Grid container>
 <Grid container spacing="12">
  <Grid item sm={12}>
  <div style={{position:'relative'}}>
  <br />
  <br />
  <br />
  <img src={banner} alt="immap career" height="auto" width="100%"/>
    <div className={classes.midbanner}> Jobs Opening </div>
    </div>
    </Grid>
      </Grid>
      <Grid container style={{margin:'8%'}}>
      <Grid item sm={12}>
    <Paper className={classes.mainFeaturedPost}>
     <div className={classes.mainFeaturedPostContent}>
      <Typography component="h1" variant="h5" color="inherit" align="center" >
       Start create your Application now &nbsp;
      
        <Button size="large" variant="contained" className={classes.button} >
        <Link to="./Register" className={classes.navLink}>
        Register Now
        </Link>
          </Button>
          
          </Typography>
          </div>
          </Paper>
          </Grid>

          <Grid item sm={3}>
          <Paper className={classes.paper}>
          <Typography variant="subheading" gutterBottom>
          Filter by
        </Typography>
          <FadeMenu />
          </Paper>
        </Grid>

         <Grid item sm={9}>
          <Paper className={classes.paper}>
          <SimpleCard />
          <br></br>
          <SimpleCard />
          <br></br>
          <SimpleCard />
          </Paper>
        </Grid>
          </Grid>
          </Grid>
   </React.Fragment>
)
  }

  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Home);

