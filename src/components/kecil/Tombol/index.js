import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconFavorite, IconSubmit } from "../../../assets";
import { colors } from "../../../utils";
import TextOnly from "./TextOnly";
import TextIcon from './TextIcon';

const Tombol = (props) => {

    const Icon = () => {
        if (icon === "favorite") {
            return <IconFavorite />
        }
        else if (icon === "submit") {
            return <IconSubmit />
        }

        return <IconSubmit />
    }

    const { icon, TotalFavorite, padding, type, onPress } = props;

    if (type === "text") {
        return <TextOnly {...props} />
    }
    else if (type === "textIcon") {
        return <TextIcon {...props} />
    }

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress} >
            <Icon />

            {TotalFavorite && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{TotalFavorite}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.white,
        padding: padding,
        borderRadius: 10
    }),
    notif: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 3,
        padding: 3
    },
    textNotif: {
        fontSize: 8,
        color: colors.black
    }
})