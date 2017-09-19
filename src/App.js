import React, {Component} from 'react';
import './App.css';
import VisibleConversationList from './ConversationList';
import VisibleMessageList from './MessageList'

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <div className="main">
          <VisibleConversationList/>
          <VisibleMessageList/>
        </div>
        <Footer/>
      </div>
    );
  }
}

class Footer extends Component {
   render() {
   return (
      <div className="footer">
      <div className="user-menu">
        <span className="user-menu_profile-pic"></span>
        <span className="user-menu_username">Chika</span>
        <span className="connection_status">online</span>
      </div>
      </div>
   );
   }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
      <div className="team-menu">Team Awesome</div>
      <div className="channel-menu">
        <span className="channel-menu_name">
        <span className="channel-menu_prefix">#</span>admin</span>
      </div>
      </div>
    );
  }
}

export default App;
