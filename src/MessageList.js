import React, {Component} from 'react';
import {createStore} from 'redux';
import './App.css';


const initialState = {
    messages: [
      {
        message: "Hi, Ivan! It is me",
        sent_at: "11 AM",
        sendeR: "Chika"
      },
      {
        message: "Hi, Ivan! It is me second time",
        sent_at: "11 AM",
        sender: "Chika"
      },
      {
        message: "Hi, Ivan! It is me third time",
        sent_at: "11 AM",
        sender: "Chika"
      },
    ],
  };

const store = createStore(reducer, initialState)

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message)
    };
  } else {
    return state;  
  } 
}

class MessageList extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  handleSubmit = (message) => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: message,
    });
  };

  render() {
    const messages = store.getState().messages;

    return (
      <div className="message-history">
        {messages.map((message) => {
          return (
            <Message 
              message={message.message}
              sent_at={message.sent_at}
              sender={message.sender}
            />
          ); 
        })}
        <MessageInput 
          onEnterPress={this.handleSubmit}
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
                    {this.props.sent_at}
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
      this.props.onEnterPress(e.target.value);
      console.log(e.target.value);
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

export default MessageList;
