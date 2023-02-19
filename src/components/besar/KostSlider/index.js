import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

export default class KostSlider extends Component {
    render() {
        const { images } = this.props
        return (
            <View>
                <Text> KostSlider </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
