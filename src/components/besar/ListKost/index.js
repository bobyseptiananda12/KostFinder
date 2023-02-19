import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardKost } from "../../kecil";

const ListKost = ({ kost, navigation }) => {
    return (
        <View style={styles.container}>
            {kost.map((kosan) => {
                return (
                    <CardKost key={kosan.id} kosan={kosan} navigation={navigation}/>
                )
            })}
        </View>
    )
}

export default ListKost

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    }
})
