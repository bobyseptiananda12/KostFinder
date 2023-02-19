import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Slider1, Slider2 } from '../../../assets'

export default class BannerSlider extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {
        return (
            <View>
                <Image source={Slider1} style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 30,
    } 
})
