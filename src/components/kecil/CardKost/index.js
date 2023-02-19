import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { colors, responsiveWidth } from "../../../utils";
import Tombol from '../Tombol';
import { connect } from "react-redux";

const CardKost = ({ kosan, navigation, dataUser }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={kosan.gambar} style={styles.gambar} />
                <Text style={styles.text}>{kosan.nama}</Text>
            </TouchableOpacity>

            <Tombol type="text" title="Detail" padding={7} 
            onPress={() => navigation.navigate('DetailKost', { kosan })}/>
        </View>
    );
};

const mapStatetoProps = (state) => ({
    dataUser: state.UserReducer.dataUser
})

export default connect(mapStatetoProps, null)(CardKost)

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    gambar: {
        width: 124,
        height: 124,
        borderRadius: 10,
    },
    text: {
        fontSize: 13,
        textTransform: 'capitalize',
        textAlign: 'center',
        padding: 3,
        marginTop: 7
    },
    card: {
        backgroundColor: colors.third,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})