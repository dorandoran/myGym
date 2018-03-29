import React, { Component } from 'react';
import { ScrollView, Text, View, Linking, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
    buildURL = (name, address) => {
        const BASE_URL = 'https://www.google.com/search?q=';
        let searchAddress = address.replace(/\s/g, "+");
        let searchName = name.replace(/\s/g, "+");
        return `${BASE_URL}${searchName}+${searchAddress}`
    }

    renderLikedGyms() {
        return this.props.likedGyms.map(gym => {
            const { name, rating, vicinity, geometry, place_id } = gym;
            const initialRegion = {
                longitude: geometry.location.lng,
                latitude: geometry.location.lat,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card title={name} key={place_id}>
                    <View style={{ height: 200 }}>
                        <MapView 
                            style={{ flex: 1 }}
                            cacheEnabled={Platform.OS === 'android'}
                            scrollEnabled={false}
                            initialRegion={initialRegion}
                            liteMode
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{vicinity}</Text>
                            <Text style={styles.italics}>Google Rating: {rating}</Text>
                        </View>
                        <Button 
                            title="Get More Info!"
                            backgroundColor="#03A9F4"
                            onPress={() => Linking.openURL(this.buildURL(name, vicinity))}
                        />
                    </View>
                </Card>
            );
        });
    }

    render(){
        return (
            <ScrollView>
                {this.renderLikedGyms()}
            </ScrollView>
        );
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
}

function mapStateToProps(state) {
    return { likedGyms: state.likedGyms };
}

export default connect(mapStateToProps)(ReviewScreen);