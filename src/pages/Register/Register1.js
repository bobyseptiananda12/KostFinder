import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from 'react-native'
import { colors, responsiveHeight, responsiveWidth } from '../../utils'
import { LogoRegister } from '../../assets'
import { Jarak, Inputan, Tombol } from '../../components'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/AuthAuction'


class Register1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: ''
    }
  }

  onContinue = () => {
    const { nama, email, nohp, password } = this.state
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
      }
      this.props.dispatch(registerUser(data, password));
      this.props.navigation.navigate('Login')
      Alert.alert("Success", "Pendaftaran Berhasil")
      console.log("Data : ", data);

    } else {
      Alert.alert("Error", "Nama, email, no. handphone, dan password harus diisi")
    }
  }

  render() {
    const { nama, email, nohp, password } = this.state
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ilustrasi}>
              <LogoRegister />
              <Jarak height={5} />
              <Text style={styles.title}>Daftar Sekarang Yuk</Text>

            </View>

            <View style={styles.card}>
              <Inputan label="Nama" value={nama} onChangeText={(nama) => this.setState({ nama })} />
              <Inputan label="Email" value={email} onChangeText={(email) => this.setState({ email })} />
              <Inputan label="No. Handphone" keyboardType="number-pad" value={nohp} onChangeText={(nohp) => this.setState({ nohp })} />
              <Inputan label="Password" secureTextEntry value={password} onChangeText={(password) => this.setState({ password })} />
              <Jarak height={25} />
              <Tombol title="Submit" type="textIcon" icon="submit" padding={10} fontSize={18} onPress={() => this.onContinue()} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    )
  }
}

const mapStateToProps = (state) => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
})

export default connect(mapStateToProps, null)(Register1);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 110,
  },
  ilustrasi: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: colors.primary
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 10
  },
  card: {
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10,
  },
})
