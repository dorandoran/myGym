import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Provider } from 'react-redux';
import Expo, { Notifcations } from 'expo';

import registerForNotifications from './src/services/push_notifications';
import Router from './Router';
import store from './store';

class App extends Component {
  componentDidMount() {
    //Below will activate push notifications.
    //This is dependent on backend URL setup in src/services/push_notifications.js

    /**
    registerForNotifications();
    Notifcations.addListener((notifcation) => {
      const { data: { text }, origin } = notifcation;

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'OK' }]
        );
      }
    });
    **/
  }

  render () {
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    return (
      <Provider store={store}>
        <Router />
      </Provider>   
    );
  }
}

export default App;