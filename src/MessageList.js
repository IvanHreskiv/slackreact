import React, {Component} from 'react';
import moment from 'moment';
import { connect } from 'react-redux'
import uuid from 'uuid';
import './App.css';


class MessageList extends Component {
  render() {
    return (
      <div className="message-history">
        {this.props.messages.map((message) => {
          return (
            <Message 
              message={message.message}
              sentAt={message.sentAt}
              sender={message.sender}
            />
          ); 
        })}
        <MessageInput 
          onEnterPress={this.props.handleSubmit}
        />
      </div>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <div className="message">
        <a className="message_profile-pic" href=""></a>
        <a className="message_username" href="">
          {this.props.sender}
        </a>
        <span className="message_timestamp">
                    {this.props.sentAt}
        </span>
        <span className="message_star"></span>
        <span className="message_content">
                    {this.props.message}
        </span>
      </div>
    );
  }
}

class MessageInput extends Component {
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const message = {
        message: e.target.value,
        sentAt: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
        sender: "Chika",
        id: uuid.v4()
      }
      this.props.onEnterPress(message);
      e.target.value = '';
    }
  }
 
  render() {
    return (
      <div className="input-box">
        <input className="input-box_text" type="text"
         onKeyPress={this._handleKeyPress} />
      </div>
    );
  }
}

const getChannelMessages = (channels, id) => {
  return channels.filter(c => c)
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: message => {
      dispatch({
        type: 'ADD_MESSAGE',
        message: message,
      });
    }
  }
}

const VisibleMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default VisibleMessageList;
