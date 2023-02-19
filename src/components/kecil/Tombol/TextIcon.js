import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconKeranjang, IconBack, IconKeranjangPutih, IconSubmit, IconFavorite } from '../../../assets'
import { colors } from '../../../utils'
import Jarak from '../Jarak'

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {

    const Icon = () =>{
        if(icon === "favorite"){
            return <IconFavorite/>
        }
        else if(icon === "submit"){
            return <IconSubmit/>
        }
        return <Icon/>
    }

    
    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Icon/>
            <Jarak width={5}/>
            <Text style={styles.title(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextIcon;

const styles = StyleSheet.create({
    container:(padding)=>({
        backgroundColor : colors.primary,
        padding: padding,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center'
    }),

    title:(fontSize) => ({
        color: colors.white,
        fontSize: fontSize,
    })
})