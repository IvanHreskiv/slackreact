import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    directChannels: [
      {
        unread: "10",
        participant: "Dode1",
        id: uuid.v4(),
        messages:
          {
            message: "Hi, Ivan! It is me",
            sentAt: "11 AM",
            sendeR: "Chika",
            id: uuid.v4()
          }
      },
      {
        unread: "14",
        participant: "Dode2",
        id: uuid.v4(),
      },
    ],
    channels: [
      {
        unread: "10",
        channel_name: "Channel1",
        id: uuid.v4()
      },
      {
        unread: "14",
        channel_name: "Channel2",
        id: uuid.v4()
      },
    ],
    messages: [
      {
        message: "Hi, Ivan! It is me",
        sentAt: "11 AM",
        sendeR: "Chika",
        id: uuid.v4()
      },
      {
        message: "Hi, Ivan! It is me second time",
        sentAt: "11 AM",
        sender: "Chika",
        id: uuid.v4()
      },
      {
        message: "Hi, Ivan! It is me third time",
        sentAt: "11 AM",
        sender: "Chika",
        id: uuid.v4()
      },
    ],
  };

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message),
      //TODO: Need to be removed
      channels: state.channels,
      directChannels: state.directChannels
    };
  } else {
    return state;
  }
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
