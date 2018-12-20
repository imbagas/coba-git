import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import green from '@material-ui/core/colors/green'
import classNames from 'classnames'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
})

class FlashMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }

    this.handleDismiss = this.handleDismiss.bind(this)
  }

  // handleClick() {
  //   this.setState({ open: true })
  // }

  // handleDismiss = (event, reason) => {
  // handleDismiss(e) {
    // if (reason === 'clickaway') {
    //   return
    // }

    // this.setState({ open: false })
  // }

  handleDismiss() {
    this.props.deleteFlashMessage(this.props.message.id)
  }


  render() {
    const { classes, id, message } = this.props
    const { type, text } = message

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleDismiss}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}

          // message={<span id="message-id">{text}</span>}
          // action={[
          //   <IconButton
          //     key="close"
          //     aria-label="Close"
          //     color="inherit"
          //     className={classes.close}
          //     onClick={this.handleDismiss}
          //   >
          //     <CloseIcon />
          //   </IconButton>,
          // ]}
        >
        <SnackbarContent
          className={classNames(classes[type], type)}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar" className={classes.message}>
              {/* <Icon className={classNames(classes.icon, classes.iconVariant)} /> */}
             {text}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleDismiss}
            >
              <CloseIcon/>
            </IconButton>,
          ]}
          />
        </Snackbar>
      </div>
    )
  }
}

FlashMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default withStyles(styles)(FlashMessage)
