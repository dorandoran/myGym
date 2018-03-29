import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { clearLikedGyms } from '../actions';

class SettingsScreen extends Component {
    render(){
        return (
            <View>
                <Button 
                    title="Reset Liked Gyms"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedGyms}
                />
            </View>
        );
    }
}

export default connect(null, { clearLikedGyms })(SettingsScreen);