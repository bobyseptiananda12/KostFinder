import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Alert} from 'react-native'
import { dummyProfile } from '../../data'
import { colors, responsiveHeight, responsiveWidth, getData } from '../../utils'
import { Inputan, Pilihan, Tombol } from '../../components'
import { connect } from 'react-redux'
import { updateProfile } from '../../actions/ProfileAction'
import { LogoRegister } from '../../assets'

class EditProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uid: '',
            nama: '',
            email: '',
            nohp: '',
            profile: dummyProfile
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    componentDidUpdate(prevProps) {
        const { updateProfileResult } = this.props

        if(updateProfileResult && prevProps.updateProfileResult !== updateProfileResult) {
            this.props.navigation.replace("MainApp")
        }
    }

    getUserData = () => {
        getData('user').then(res => {
            const data = res
            this.setState({
                uid: data.uid,
                nama: data.nama,
                email: data.email,
                nohp: data.nohp,
            })
        })
    }

    onSubmit = () => {
        const { nama, nohp } = this.state
        if(nama, nohp ) {
            //dispatch update
            this.props.dispatch(updateProfile(this.state))

        }else {
            Alert.alert("Error", "Isi Data Terlebih Dahulu")
        }
    }

    render() {
        const { profile, nama, email, nohp, updateProfileLoading } = this.state
        return (
            <View style={styles.pages}>
                    <Inputan label="Nama" value={nama} onChangeText={(nama) => this.setState({ nama })} />
                    <Inputan label="Email" value={email} disabled />
                    <Inputan label="No. Handphone" value={nohp} onChangeText={(nohp) => this.setState({ nohp })}/>

                    <View style={styles.logo}>
                    <LogoRegister />
                        {/* <Text style={styles.label}>Foto Profile :</Text>
                        <View style={styles.wrapperUpload}>
                            <Image source={profile.avatar} style={styles.foto} />
                            <View style={styles.tombolChangePhoto}>
                                <Tombol loading={updateProfileLoading} title="Change Photo" type="text" padding={7} />
                            </View>
                        </View> */}
                    </View>
                    <View style={styles.submit}>
                        <Tombol title="Submit" type="textIcon" icon="submit" 
                        padding={responsiveHeight(15)} fontSize={20} onPress={() => this.onSubmit()} />
                    </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    updateProfileLoading: state.ProfileReducer.updateProfileLoading,
    updateProfileResult: state.ProfileReducer.updateProfileResult,
    updateProfileError: state.ProfileReducer.updateProfileError,
  })

export default connect(mapStateToProps, null)(EditProfile);
const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        marginTop: 120,
        alignItems: "center"
    },
    label: {
        fontSize: 18,
    },
    foto: {
        marginTop: 10,
        width: responsiveWidth(250),
        height: responsiveWidth(250),
        borderRadius: 60,
    },
    wrapperUpload: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    // tombolChangePhoto: {
    //     marginLeft: 20,
    //     flex: 1,
    // },
    submit: {
        marginVertical: 151,
    }
})
