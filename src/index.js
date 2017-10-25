import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    activeChannelId: '1-fca2',
    directChannels: [
      {
        unread: "10",
        participant: "Dode1",
        id: '1-fca2',
        messages: { message: "Hi, Ivan! It is me",
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
    channels: [ { unread: "10",
        channel_name: "Channel1",
        id: '1-fca2',
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
      },
      {
        unread: "14",
        channel_name: "Channel2",
        id: uuid.v4(),
          messages: [
            {
              message: "Hi, Ivan! It is me Channel2",
              sentAt: "11 AM",
              sendeR: "Chika",
              id: uuid.v4()
            },
          ],
      },
    ],
  };

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    const channelIndex = state.channels.findIndex(
      (c) => c.id === state.activeChannelId
    )
    const oldChannel = state.channels[channelIndex]
    const newChannel = {
      ...oldChannel,
      messages: oldChannel.messages.concat(action.message)
    }
    return {
      ...state,
      channels: [
        ...state.channels.slice(0, channelIndex),
        newChannel,
        ...state.channels.slice(
          channelIndex + 1, state.channels.length
        )
      ],
    };
  } else if (action.type === 'CHANGE_ACTIVE_CHANNEL') {
    return {
      ...state,
      activeChannelId: action.channelId,
    }
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
