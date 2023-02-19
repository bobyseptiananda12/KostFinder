// import React, { Component } from 'react'
// import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
// import { colors, responsiveWidth } from '../../utils'
// import { LogoRegister } from '../../assets'
// import { Jarak, Inputan, Tombol, Pilihan } from '../../components'

// export default class Register2 extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             dataProvinsi: [],
//             dataKota: [],
//         }
//     }

//     render() {
//         const { dataKota, dataProvinsi } = this.state
//         return (
//             <KeyboardAvoidingView
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 style={styles.page}>
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <View style={styles.ilustrasi}>
//                             <LogoRegister />
//                             <Jarak height={5} />
//                             <Text style={styles.title}>Isi Alamat</Text>
//                             <Text style={styles.title}>Lengkap Anda</Text>

//                             <View style={styles.wrapperCircle}>
//                                 <View style={styles.circleDisabled}></View>
//                                 <Jarak width={10} />
//                                 <View style={styles.circlePrimary}></View>
//                             </View>
//                         </View>

//                         <View style={styles.card}>
//                             <Inputan label="Alamat" textarea />
//                             <Inputan label="Provinsi" />
//                             <Inputan label="Kota/Kab" />
//                             <Jarak height={25} />
//                             <Tombol title="Continue" type="textIcon" icon="submit" padding={10} fontSize={18} onPress={() => this.props.navigation.navigate('MainApp')} />
//                         </View>
//                     </ScrollView>
//                 </TouchableWithoutFeedback>
//             </KeyboardAvoidingView>

//         )
//     }
// }

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         backgroundColor: colors.white,
//         paddingTop: 110,
//     },
//     ilustrasi: {
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 24,
//         color: colors.primary
//     },
//     wrapperCircle: {
//         flexDirection: 'row',
//         marginTop: 10
//     },
//     circlePrimary: {
//         backgroundColor: colors.primary,
//         width: responsiveWidth(11),
//         height: responsiveWidth(11),
//         borderRadius: 10
//     },
//     circleDisabled: {
//         backgroundColor: colors.border,
//         width: responsiveWidth(11),
//         height: responsiveWidth(11),
//         borderRadius: 10
//     },
//     card: {
//         marginHorizontal: 30,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         backgroundColor: colors.white,
//         paddingHorizontal: 30,
//         paddingBottom: 20,
//         paddingTop: 10,
//         borderRadius: 10,
//         marginTop: 15,
//         marginBottom: 10,
//     },


// })