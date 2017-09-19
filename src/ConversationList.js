import React, {Component} from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux'
import './App.css';

class ConversationList extends Component {
  render() {
    return (
      <div className="listings">
        <ChannelsList
          channels={this.props.channels}
        />
        <DirectChannelsList
          directChannels={this.props.directChannels}
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

const mapStateToProps = (state) => {
  return {
    directChannels: state.directChannels,
    channels: state.channels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: (msg) => {
      console.log('Hi Ivan from mapDispatchToProps')
      dispatch({
        type: 'UNKNOWN',
      })
    }
  }
}

const VisibleConversationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default VisibleConversationList;
