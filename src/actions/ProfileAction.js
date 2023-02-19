import FIREBASE from '../config/FIREBASE'
import { storeData } from '../utils';
import { Alert } from 'react-native'
import { dispatchError, dispatchLoading, dispatchSuccess } from '../utils'

export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const updateProfile = (data) => {
    return (dispatch) => {

        dispatchLoading(dispatch, UPDATE_PROFILE);

        const dataBaru = {
            uid: data.uid,
            nama: data.nama,
            nohp: data.nohp,
            email: data.email,
            status: 'user',
        }

        FIREBASE.database()
            .ref('users/' + dataBaru.uid)
            .update(dataBaru)
            .then((response) => {

                //SUKSESS
                dispatchSuccess(dispatch, UPDATE_PROFILE, response ? response : [])

                Alert.alert("Sukses", "Profil berhasil diubah")
                //Local Storage (Async Storage)
                storeData('user', dataBaru)
            })
            .catch((error) => {
                dispatchError(dispatch, UPDATE_PROFILE, error.message)

                alert(error.message)
            });
    }
}