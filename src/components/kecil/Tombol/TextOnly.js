import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";

const TextOnly = ({ padding, title, fontSize, onPress }) => {

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Text style={styles.text(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 10
    }),
    text: (fontSize) => ({
        color: colors.secondary,
        textAlign: 'center',
        fontSize: fontSize ? fontSize : 13,
    })
})