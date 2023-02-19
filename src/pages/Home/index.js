import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { BannerSlider, HeaderComponent, Jarak, ListJenisKos, ListKost } from '../../components'
import { colors } from '../../utils'
import { dummyJenis, dummyKost } from '../../data'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getUser } from '../../actions/UserAction'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jeniskos: dummyJenis,
            kost: dummyKost
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        const { jeniskos, kost } = this.state;
        const { navigation, dataUser } = this.props
        return (
            <View style={styles.page}>
                <HeaderComponent navigation={navigation}/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BannerSlider />
                    <View style={styles.pilihJenisKos}>
                        <Text style={styles.label}>Pilih Jenis Kos</Text>
                        <ListJenisKos jeniskos={jeniskos} />
                    </View>

                    <View style={styles.pilihKos}>
                        <Text style={styles.label}>Rekomendasi Kos</Text>
                        <ListKost kost={kost} navigation={navigation}/>
                    </View>

                    <Jarak height={100}/>
                </ScrollView>
            </View>
        )
    }
}

const mapStatetoProps = (state) => ({
    dataUser: state.UserReducer.dataUser
})

export default connect(mapStatetoProps, {getUser})(Home)

const styles = StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.white },
    pilihJenisKos: {
        marginHorizontal: 30,
        marginTop: 20
    },
    pilihKos: {
        marginHorizontal: 30,
        marginTop: 20
    },
    label: {
        fontSize: 18,
    }
})
