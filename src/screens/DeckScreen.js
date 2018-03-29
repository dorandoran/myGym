import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import * as actions from '../actions';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
    renderNoMoreCards() {
        return (
            <View style={{ paddingTop: 20 }}>
                <Card title="No More Gyms!">
                    <Button 
                        title="Back to Map"
                        large
                        icon={{ name: 'my-location' }}
                        backgroundColor="#03A9F4"
                        onPress={() => Actions.mapscreen()}
                    />
                </Card>
            </View>
        );
    }

    renderCard(gym) {
        const initialRegion = {
            longitude: gym.geometry.location.lng,
            latitude: gym.geometry.location.lat,
            longitudeDelta: 0.02,
            latitudeDelta:  0.045
        };

        return (
            <Card title={gym.name}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true: false}
                        initialRegion={initialRegion}
                        liteMode
                    >
                    </MapView>
                </View>

                <Text>
                    {gym.vicinity}
                </Text>

                <View style={styles.detailWrapper}>
                    <Text>Google Rating: {gym.rating}</Text>
                </View>
            </Card>
        );
    }

    render(){
        return (
            <View style={ Platform.OS === 'ios' ? { marginTop: 40 } : {} }>
                <Swipe 
                    data={this.props.gyms}
                    renderCard ={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                    onSwipeRight={gym => this.props.likeGym(gym)}
                    keyProp="place_id"
                />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
}

function mapStateToProps({ gyms }) {
    return { gyms: gyms.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);