import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverOutlinedIcon from '@material-ui/icons/Close';
import TextFieldsEdit from './TextFieldsEdit';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  margin: {
    margin: theme.spacing.unit,
    float: 'right',
    top: -5 ,
    backgroundColor: '#be2126',
  },
});

class SimpleModal extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose  = this.handleClose.bind(this);
      }

  handleOpen(){
    this.setState({ open: true });
  };

  handleClose(){
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>

        <Fab size="small" color="secondary" aria-label="Edit"  className={classes.margin} onClick={this.handleOpen}>
     <EditIcon />
      </Fab>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
         
           <TextFieldsEdit />
       
            
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;