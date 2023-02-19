import React, { Component } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { colors, getData, responsiveHeight } from '../../utils'
import { Inputan, Tombol } from '../../components'
import { connect } from 'react-redux'

class ChangePassword extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            newPassword: '',
            NewPasswordConfirmation: '',
        }
    }

    onSubmit = () => {
        const { password, newPassword, NewPasswordConfirmation } = this.state

        if (newPassword !== NewPasswordConfirmation) {
            Alert.alert('Error', 'Password dan Konfirmasi Password Baru Harus Sama')
        } else if (password && newPassword && NewPasswordConfirmation) {

            //Ambil data email dari local storage
            getData('user').then((res) => {
                const parameter = {
                    email: res.email,
                    password: password,
                    newPassword: NewPasswordConfirmation,
                }

                this.props.dispatch(ChangePassword(parameter)); 
            })
        }
        else {
            Alert.alert('Error', 'Harus mengisi seluruh kolom!')
        }
    }

    render() {
        const { password, newPassword, NewPasswordConfirmation } = this.state
        return (
            <View style={styles.pages}>
                <View>
                    <Inputan label="Password Lama" secureTextEntry value={password} onChangeText={(password) => this.setState({ password })} />
                    <Inputan label="Password Baru" secureTextEntry value={newPassword} onChangeText={(newPassword) => this.setState({ newPassword })} />
                    <Inputan label="Konfirmasi Password Baru" secureTextEntry value={NewPasswordConfirmation} onChangeText={(NewPasswordConfirmation) => this.setState({ NewPasswordConfirmation })} />
                </View>

                <View style={styles.submit}>
                    <Tombol title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18} onPress={() => this.submit()} />
                </View>
            </View>
        )
    }
}

export default connect()(ChangePassword)

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    submit: {
        marginVertical: 30
    }
})
