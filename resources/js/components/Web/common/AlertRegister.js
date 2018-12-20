import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'


class AlertDialog extends React.Component {
      constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
      }

  handleClickOpen() {
    this.setState({ open: true });
  };

  handleClose(){
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button size="small" variant="contained" color="default" onClick={this.handleClickOpen} style={{margin:'0.5%'}}>
          Apply Job
        </Button>
        <Button size="small" variant="contained" style={{margin:'0.5%'}}>
        Print
      </Button>
      <Button size="small" variant="contained"  style={{margin:'0.5%'}}>
        Share
      </Button>
      <Link to="./">
      <Button size="small" variant="contained" style={{margin:'0.5%'}}>
        Return to list
      </Button>
      </Link>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"You need to Create Account for Applying Jobs"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             To Apply the Job, you need an Registered Account to iMMAP Careers, to collect your information data for iMMAP.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="./Register" style={{textDecoration:'none'}}>
            <Button onClick={this.handleClose} color="primary">
              Register
            </Button>
            </Link>
            <Button onClick={this.handleClose} color="primary">
              Later
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
