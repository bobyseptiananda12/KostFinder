import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView, { Marker } from 'react-native-maps';
// import { useNavigation } from '@react-navigation/native';
// import { HeaderComponent } from '../../components'

export default class Geolocation extends Component {
    state = {
        location: null,
        region: null,
        errorMessage: null,
    };
    UNSAFE_componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage:
                    'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        const region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
        };
        this.setState({ location, region });
    };
    render() {
        const { navigation } = this.props
        return (
            <MapView
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: Constants.statusBarHeight,
                }
                }
                initialRegion={this.state.region} >
                <Marker
                    //Kost Singgahsini Wisma Seruni Tipe A dan B Wonocolo Surabaya
                    coordinate={{
                        latitude: -7.32739543167602,
                        longitude: 112.74292409991799,
                    }}
                    title="Kost Singgahsini Wisma Seruni Tipe A dan B Wonocolo Surabaya"
                />
                <Marker
                    //Kost Apik Ibu Yuli Wonokromo Surabaya
                    coordinate={{
                        latitude: -7.309429388357962,
                        longitude: 112.72811784302266,
                    }}
                    title="Kost Apik Ibu Yuli Wonokromo Surabaya"
                    // onPress={() => navigation.navigate('DetailKost')}
                />
                <Marker
                    //Kost D Rainbow Gayungan Surabaya 415DR
                    coordinate={{
                        latitude: -7.313603906080999,
                        longitude: 112.73114606949412,
                    }}
                    title="Kost D Rainbow Gayungan Surabaya 415DR"
                />
                <Marker
                    //Kost La Boende LAF Tipe B Gayungan Surabaya
                    coordinate={{
                        latitude: -7.329411600926383,
                        longitude: 112.72522397115884,
                    }}
                    title="Kost La Boende LAF Tipe B Gayungan Surabaya"
                />
                <Marker
                    //Kost Omah Kita 2 Jambangan Surabaya
                    coordinate={{
                        latitude: -7.317784661525495, 
                        longitude: 112.72541248278691,
                    }}
                    title="Kost Omah Kita 2 Jambangan Surabaya"
                />

            </MapView>

        );
        // return (
        // <HeaderComponent navigation={navigation}/>)
    }
}

