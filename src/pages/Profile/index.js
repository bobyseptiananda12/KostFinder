import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { colors, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { dummyMenu } from '../../data'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { ListMenu } from '../../components';
import { FotoDefault } from '../../assets';
import { getImageFromFirebase } from '../../config/FIREBASE'

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: false,
            menus: dummyMenu
        }
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            console.log("Komponen dipasang")
            this.getUserData();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    getUserData = () => {
        getData('user').then(res => {
            const data = res

            if (data) {
                this.setState({
                    profile: data
                })
            } else {
                this.props.navigation.replace('Login')
            }
        })
    }

    render() {
        const { profile, menus, imageUrl, setImageUrl } = this.state
        useEffect(() => {
            getImageFromFirebase()
                .then(url => {
                    setImageUrl(url);
                });
        }, []);
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    {/* <Image
                        style={styles.image}
                        source={{ uri: imageUrl }}
                    /> */}
                    {/* <Image source={profile.avatar ? { uri: profile.avatar } : FotoDefault} style={styles.foto} /> */}
                    <View style={styles.profile}>
                        <Text style={styles.nama}>{profile.nama}</Text>
                        <Text style={styles.desc}>No. HP : {profile.nohp}</Text>
                    </View>

                    <ListMenu menus={menus} navigation={this.props.navigation} />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(652),
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    foto: {
        width: responsiveWidth(250),
        height: responsiveWidth(250),
        borderRadius: 80,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    profile: {
        marginTop: 10,
        alignItems: 'center'
    },
    nama: {
        fontSize: RFValue(24, heightMobileUI)
    },
    desc: {
        fontSize: RFValue(18, heightMobileUI)
    },
    image: {
        width: '100%',
        height: '100%',
    },
})
