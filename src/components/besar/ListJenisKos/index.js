import React from "react";
import { StyleSheet, View } from "react-native";
import { CardKos } from "../../kecil";

const ListJenisKos = ({ jeniskos }) => {
    return (
        <View style={styles.container}>
            {jeniskos.map((kos) => {
                return (
                    <CardKos kos={kos} key={kos.id}/>
                )
            })}
        </View>
    )
}

export default ListJenisKos

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginTop: 10
    }
})