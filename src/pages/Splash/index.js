import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Logo, Ilustrasi } from '../../assets'

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('MainApp')
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                <View style={styles.ilustrasi}>
                    <Ilustrasi />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ilustrasi: {
        position: 'absolute',
        bottom: 0,
    },
    logo: {
        position: 'absolute',
        top: 240,
    }
});
