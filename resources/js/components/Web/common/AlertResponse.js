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
        <Button size="normal" variant="contained" color="default" onClick={this.handleClickOpen} style={{margin:'0.5%'}}>
          Response
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Redirect to Google Calendar"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             You'll be redirected to Google Calendar Form, Please fill your attendance date. 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="./Date" style={{textDecoration:'none'}}>
            <Button onClick={this.handleClose} color="primary">
              Agree
            </Button>
            </Link>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
