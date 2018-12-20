import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from '../validations/common/isEmpty'
import { withStyles, withTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import mainLogo from'../../../../img/logo.png'
import { primaryColor, secondaryColor } from '../config/colors'


const styles = theme => {
  console.log('theme', theme)
  const css = {
    root: {
      flexGrow: 1,
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    logo: {
      flexGrow: 1,
      marginLeft: '16px'
    },
    navSeparator: {
      marginLeft: '8px',
      marginRight: '8px',
      fontSize: '1rem',
    },
    navMenu: {
      paddingLeft: '8px',
      paddingRight: '8px',
      fontSize: '1rem',
      'text-decoration': 'none',
      '&:last-child': {
        marginRight: '16px'
      },
      '&:hover':{
        'border-bottom': '1px solid ' + primaryColor,
      },
      '& > p': {
        fontSize: '1rem'
      }
    }
  }
  return css
}

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  logout(e) {
    e.preventDefault()
    this.props.logoutUser()
  }

  render() {
    let { user, classes, auth } = this.props

    return(
      <div>
        <AppBar color="default">
          <Toolbar>
            <div className={classes.logo}>
              <Link to="/" >
                <img  src={mainLogo} alt="immap career"/>
              </Link>
            </div>

            { auth.isAuthenticated !== true &&
              <Link to='/login' className={classes.navMenu}>
                <Typography color="secondary">Login</Typography>
              </Link>
            }
            { auth.isAuthenticated !== true &&
              <Typography color="secondary" className={classes.navSeparator}> | </Typography>
            }
            { auth.isAuthenticated !== true &&
              <Link to='/register' className={classes.navMenu}>
                <Typography color="secondary">Register</Typography>
              </Link>
            }
            { !isEmpty(user.data) &&
              <Typography color="secondary" className={classes.navSeparator}>Hi {user.data.first_name}!</Typography>
            }
            { auth.isAuthenticated === true &&
              <Link to='/Profile' className={classes.navMenu}>
                 <Typography color="secondary">Profile</Typography>
              </Link>
             
            }
             { auth.isAuthenticated === true &&
             <Link to='/Applicationstatus' className={classes.navMenu}>
             <Typography color="secondary">Application</Typography>
             </Link>
            }
            { auth.isAuthenticated === true &&
              <Link to='#' className={classes.navMenu} onClick={this.logout.bind(this)}>
                <Typography color="secondary">Logout</Typography>
              </Link>
            }
            
          </Toolbar>
          {/* <LinearProgress color="primary" variant="determinate" value="100" /> */}
        </AppBar>
      </div>
    )
  }
}



Header.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  auth: state.auth
})

const mapDispatchToProps = {
  logoutUser,
}


export default withTheme()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header)))
