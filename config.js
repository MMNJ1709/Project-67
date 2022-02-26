import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyC2dQZ-imoSoOSUy2qdjqfMsjI_XmU3Xus",
        authDomain: "voting-app-abf4b.firebaseapp.com",
        databaseURL: "https://voting-app-abf4b-default-rtdb.firebaseio.com",
        projectId: "voting-app-abf4b",
        storageBucket: "voting-app-abf4b.appspot.com",
        messagingSenderId: "598861276995",
        appId: "1:598861276995:web:6076d62e8b71f33fbf71f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();