import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCnoY6Z-0jCDhsjuFTMM2cKke20aVIOeTc",
    authDomain: "kostfinder-3a40c.firebaseapp.com",
    projectId: "kostfinder-3a40c",
    storageBucket: "kostfinder-3a40c.appspot.com",
    messagingSenderId: "119492201270",
    appId: "1:119492201270:web:3bd6138ee90bd531f18197"
});

const FIREBASE = firebase; 

const getImageFromFirebase = () => {
    return database.ref('/gambar').once('value')
      .then(snapshot => {
        return snapshot.val();
      });
  };

export default FIREBASE
