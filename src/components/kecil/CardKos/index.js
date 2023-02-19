import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../../utils";
import { colors } from "../../../utils";

const CardKos = ({ kos }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={kos.gambar} style={styles.gambar} />
            </TouchableOpacity>
        </View>
    )
}

export default CardKos

const styles = StyleSheet.create({
    container: {
        margin: 10 
    },
    card: {
        backgroundColor: colors.third,
        
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gambar: {
        width: 70,
        height: 70,
        borderRadius: 15,
    }
})