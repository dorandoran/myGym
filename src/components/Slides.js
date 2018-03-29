import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(index){
        if (index === this.props.data.length - 1) {
            return (
                <Button 
                    title="Get Started!"
                    raised
                    buttonStyle={styles.buttonStyle}
                    onPress={() => Actions.authscreen()}
                />
            );
        }
    }

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return(
                <View 
                    key={slide.text} 
                    style={[ styles.slideStyle, { backgroundColor: slide.color }]}
                >
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style= {{ flex: 1 }}
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    buttonStyle: {
        backgroundColor: '#0288D1',
    },
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        marginBottom: 15
    }
}

export default Slides;