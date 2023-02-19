import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { LogoLogin } from '../../assets'
import { colors, responsiveHeight } from '../../utils'
import { Inputan, Jarak, Tombol } from '../../components'
import { loginUser } from '../../actions/AuthAuction'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(proops) {
    super(proops);

    this.state = {
      email: "",
      password: "",
    };
  }


  login = () => {
    const { email, password } = this.state;

    if (email && password) {
      //action
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert("Error", "Email & Password harus di isi");
    }
  };

  componentDidUpdate(prevProps) {
    const { loginResult } = this.props

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace("MainApp")
    }
  }

  render() {
    const { email, password } = this.state;
    const { loginLoading } = this.props

    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <LogoLogin />
          <Text style={styles.title}>LOGIN PAGE</Text>
        </View>
        <View style={styles.cardLogin}>
          <Inputan label="Email" value={email} onChangeText={(email) => this.setState({ email })} />
          <Inputan label="Password" secureTextEntry value={password} onChangeText={(password) => this.setState({ password })} />
          <Jarak height={25} />
          <Tombol
            title="Login"
            type="text"
            padding={12}
            fontSize={18}
            onPress={() => this.login()}
          />
        </View>

        <View style={styles.register}>
          <Text style={styles.textBlack}>Belum Punya Akun?</Text>
          <Text style={styles.textBrown} onPress={() => this.props.navigation.navigate('Register1')}>Klik Untuk Daftar</Text>
        </View>
      </View>
    )
  }
}

const mapStateProps = (state) => ({
  loginLoading: state.AuthReducer.loginloading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});


export default connect(mapStateProps, null)(Login);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(120)
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 20,
  },
  textBrown: {
    fontSize: 18,
    color: colors.primary,
    top: 5,
  },
  textBlack: {
    fontSize: 18,
    color: 'black',
  },
  title: {
    fontSize: 24,
    color: colors.primary
  },
});
