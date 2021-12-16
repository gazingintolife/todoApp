import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAamWBHnDywhYJWUGqw3l0JtfRkk-Bw7Lk",
    authDomain: "to-do-app-feda6.firebaseapp.com",
    databaseURL: "https://to-do-app-feda6.firebaseio.com",
    projectId: "to-do-app-feda6",
    storageBucket: "to-do-app-feda6.appspot.com",
    messagingSenderId: "931731889066",
    appId: "1:931731889066:web:ddd0c75059b9b300d4e9d3"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
