import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { KostSlider } from '../../components/besar'
import { colors, getData, heightMobileUI, numberWithCommas, responsiveHeight } from '../../utils'

export default class DetailKost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      kosan: this.props.route.params.kosan,
      images: this.props.route.params.kosan.gambar,
      // Geolocation: this.props.route.params.Geolocation
    }
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res

      if (data) {
        this.setState({
          profile: data
        })
      } else {
        this.props.navigation.replace('Login')
      }
    })
  }

  render() {
    const { kosan, images } = this.state
    return (
      <View style={styles.page}>
        {/* <KostSlider image={images} /> */}
        
        <View style={styles.container}>
          <View style={styles.desc}>
          {/* <Text images={images}>{kosan.images}</Text> */}
            <Text style={styles.nama}>{kosan.nama}</Text>
            {/* <Text style={styles.ready}>{kosan.ready}</Text> */}
            <Text style={styles.harga}>Harga : Rp{numberWithCommas(kosan.harga)}</Text>

            <View style={styles.garis} />

            {/* <View style={styles.wrapperJenisHarga}>
              <Text>Jenis : {kosan.jenis}</Text>
              <Text>Listrik : {kosan.listrk}</Text>
            </View> */}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(493),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  desc: {
    marginHorizontal: 30,
  },
  nama: {
    fontSize: RFValue(26, heightMobileUI),
    textTransform: 'capitalize',
    marginTop: 20
  },
  harga: {
    marginVertical: 15,
    fontSize: RFValue(17, heightMobileUI),
  },
  garis: {
    borderWidth: 0.4,
    marginBottom: 15
  }

})
