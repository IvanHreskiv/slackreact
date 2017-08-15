import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="main">
          <ConversationList />
          <MessageList />
        </div>
    );
  }
}

class ConversationList extends Component{
  render() {
      return (
          <div className="listings">
              <ChannelsList
                  unread="25"
                  channel_name="admim"
              />
              <DirectMessagesList
                  participant="Prticipant1"
                  unread_messages="10"
              />
          </div>
      );
    }
}


class ChannelsList extends Component {
    render() {
        return (
            <div className="listings_channels">
                <h2 className="listings_header">Channels</h2>
                <ul className="channel_list">
                    <li className="channel active">
                        <a className="channel_name">
                            <span className="unread">
                                {this.props.unread}
                            </span>
                            <span><span className="prefix">#</span>
                                {this.props.channel_name}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}


class DirectMessagesList extends Component {
    render() {
        return (
            <div className="listings_direct-messages">
                <h2 className="listings_header">Direct Messages</h2>
                <ul className="channel_list">
                    <li className="channel">
                        <a className="channel_name">
                            <span className="unread">
                                {this.props.unread_messages}
                            </span>
                            <span><span className="prefix"></span>
                                {this.props.participant}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}


class MessageList extends Component {
  render() {
    return (
          <div className="message-history">
              <Message
                  message="Hi, Ivan! It is me"
                  sent_at="11 AM"
                  sender="Chika"
              />
              <Message
                  message="Hi, Ivan! It is me second time"
                  sent_at="11 AM"
                  sender="Chika"
              />
              <Message
                  message="Hi, Ivan! It is me third time"
                  sent_at="12 AM"
                  sender="Chika"
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

export default App;
