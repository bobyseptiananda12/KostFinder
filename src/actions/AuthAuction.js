import FIREBASE from "../config/FIREBASE";
import { storeData } from "../utils";
import { dispatchError, dispatchLoading, dispatchSuccess } from '../utils'
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";

export const registerUser = (data, password) => {
    return (dispatch) => {
        dispatchLoading(dispatch, REGISTER_USER);

        FIREBASE.auth().createUserWithEmailAndPassword(data.email, password)
            .then((success) => {
                // Ambil UID, buat data baru (data+uid) 
                const dataBaru = {
                    ...data,
                    uid: success.user.uid
                }

                //Simpan ke Realtime
                FIREBASE.database()
                    .ref('users/' + success.user.uid)
                    .set(dataBaru);


                //SUKSESS
                dispatchSuccess(dispatch, REGISTER_USER, dataBaru)

                ///LOCAL STORAGE
                storeData('user', dataBaru)

            })
            .catch((error) => {

                //ERROR
                dispatchError(dispatch, REGISTER_USER, error.message)

                alert(error.message)

            });
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {

        dispatchLoading(dispatch, LOGIN_USER);

        FIREBASE.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                // Signed in
                FIREBASE.database().ref('/users/' + success.user.uid).once('value').then((resDB) => {

                    if (resDB.val()) {

                        //SUKSES
                        dispatchSuccess(dispatch, LOGIN_USER, resDB.val())

                        ///LOCAL STORAGE
                        storeData('user', resDB.val())
                    } else {
                        dispatch({
                            type: LOGIN_USER,
                            payload: {
                                loading: false,
                                data: false,
                                errorMessage: "Data User Tidak Tersedia",
                            }
                        })

                        alert("Data User Tidak Tersedia")
                    }
                });
            })
            .catch((error) => {

                //ERROR
                dispatchError(dispatch, LOGIN_USER, error.message)

                alert(error.message)
            });

    }
}