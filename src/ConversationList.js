import React, {Component} from 'react';
import './App.css';

class ConversationList extends Component {
  state = {
    directChannels: [
      {
        unread: "10",
        participant: "Dode1"
      },
      {
        unread: "14",
        participant: "Dode2"
      },
    ],
    channels: [
      {
        unread: "10",
        channel_name: "Channel1"
      },
      {
        unread: "14",
        channel_name: "Channel2"
      },
    ],
  };

  render() {
    return (
      <div className="listings">
        <ChannelsList
          channels={this.state.channels}
        />
        <DirectChannelsList
          directChannels={this.state.directChannels}
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

export default ConversationList;
