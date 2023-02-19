import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, responsiveHeight, fonts } from '../../../utils'
import { IconSearch } from '../../../assets'
import { Jarak, Tombol } from '../../kecil'

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperHeader}>

                    {/* Input Pencarian */}

                    <View style={styles.searchSection}>
                        <IconSearch />
                        <TextInput placeholder='Cari Kost. . .                               ' style={styles.input} />
                    </View> 
                    <Jarak width={10} />
                    <Tombol icon="favorite" TotalFavorite={2} padding={10}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125)
    },
    jarak: {
        width: 10
    },
    wrapperHeader: {
        marginTop: 60,
        marginHorizontal: 30,
        flexDirection: 'row'
    },
    searchSection: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        height: 45,
    }
})
