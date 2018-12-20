import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../redux/actions/webActions'

class FlashMessageList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    )
    return(
      <div id="flash-messages">
        {messages}
      </div>
    )
  }
}

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.web.flashMessage
})

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessageList)
