import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Icon } from 'react-native-elements'

import AuthScreen from './src/screens/AuthScreen';
import DeckScreen from './src/screens/DeckScreen';
import MapScreen from './src/screens/MapScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const RouterComponent = () => {
    return (
        <Router
            sceneStyle={{ paddingTop: Platform.OS === 'android' ? 12 : 0 }}
            titleStyle={ styles.title }
        >
            <Scene key='root' hideNavBar={true} lazy={true} animationEnabled={true}>
                <Scene key='welcomescreen' hideNavBar={true} tabs={false}>
                    <Scene key='welcome' component={WelcomeScreen} />
                </Scene>

                <Scene key='authscreen' hideNavBar={true} >
                    <Scene key='auth' component={AuthScreen} />
                </Scene>

                <Scene 
                    key='mainflow' 
                    tabBarPosition='bottom'
                    tabs={true} 
                    swipeEnabled={false}
                >
                    <Scene
                        key='mapscreen' 
                        title='Map' 
                        icon={({ tintColor }) => {
                            return <Icon name='my-location' size={30} color={tintColor} />
                        }} 
                        hideNavBar={true}
                        >
                            <Scene key='map' component={MapScreen} />
                    </Scene>

                    <Scene 
                        key='deckscreen' 
                        title='Gyms' 
                        icon={({ tintColor }) => {
                            return <Icon name='description' size={30} color={tintColor} />
                        }} 
                        hideNavBar={true} 
                        >
                            <Scene key='deck' component={DeckScreen} />
                    </Scene>

                    <Scene 
                        key='reviewflow' 
                        title='Review Gyms'
                        icon={({ tintColor }) => {
                            return <Icon name='favorite-border' size={30} color={tintColor} />
                        }} 
                        >
                            <Scene 
                                key='review' 
                                component={ReviewScreen} 
                                onRight={() => Actions.settings()}
                                title='Review Gyms'
                                renderRightButton={
                                    <Button 
                                        title='Settings' 
                                        onPress={() => Actions.settings()}
                                        backgroundColor="rgba(0,0,0,0)"
                                        color="rgba(0, 122, 255, 1)"
                                    />
                                }
                                rightButtonTextStyle={{
                                    padding: 1
                                }}
                            />
                        <Scene key='settings' title='Settings' component={SettingsScreen} />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    title: {
        alignSelf: 'center'
    }
}

export default RouterComponent;