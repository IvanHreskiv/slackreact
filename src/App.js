import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <ConversationList/>
        <MessageList/>
      </div>
    );
  }
}

class ConversationList extends Component {
  render() {
    const directChannels = [
      {
        unread: "10",
        participant: "Dode1"
      },
      {
        unread: "14",
        participant: "Dode2"
      },

    ];
    const channels = [
      {
        unread: "10",
        channel_name: "Channel1"
      },
      {
        unread: "14",
        channel_name: "Channel2"
      },

    ];

    return (
      <div className="listings">
        <ChannelsList
          channels={channels}
        />
        <DirectChannelsList
          directChannels={directChannels}
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
          {this.props.channels.map((channel) => {
            return (
              <li className="channel active">
                <Channel
                  unread={channel.unread}
                  channel_name={channel.channel_name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Channel extends Component {
  render() {
    return (
      <a className="channel_name">
            <span className="unread">
                {this.props.unread}
            </span>
        <span><span className="prefix">#</span>
          {this.props.channel_name}
            </span>
      </a>
    );
  }
}


class DirectChannelsList extends Component {
  render() {
    return (
      <div className="listings_direct-messages">
        <h2 className="listings_header">Direct Messages</h2>
        <ul className="channel_list">
          {this.props.directChannels.map((channel) => {
            return (
              <li className="channel">
                <DirectChannel
                  unread={channel.unread}
                  participant={channel.participant}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}


class DirectChannel extends Component {
  render() {
    return (
      <a className="channel_name">
            <span className="unread">
                {this.props.unread}
            </span>
        <span><span className="prefix"></span>
          {this.props.participant}
            </span>
      </a>
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

