import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
        // for  testing to delete AsyncStorage:
        //AsyncStorage.removeItem('fb_token');
        this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            Actions.mapscreen();
        }
    }

    render(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Loading...</Text>
            </View>
        );
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: '#55b174',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center'
    }
}

export default connect(mapStateToProps, actions)(AuthScreen);