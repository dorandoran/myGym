import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [ 
    { text: 'Welcome to myGym!', color: '#237862' },
    { text: 'Use this to find gyms in your area!', color: '#55b174'},
    { text: 'Set your location, then swipe away.', color: '#237862'}
];

class WelcomeScreen extends Component {
    state = { token: null }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            Actions.mapscreen();
            this.setState({ token });
        } else {
            this.setState({ token: false })
        }
    }

    render(){
        if (_.isNull(this.state.token)) {
            return <AppLoading />
        }

        return (
            <Slides data={SLIDE_DATA} />
        );
    }
}

export default WelcomeScreen;