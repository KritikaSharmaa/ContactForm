import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAL9d2A3TfYVxJDbn9fFXGy9ZbPDxLcKM8",
  authDomain: "realtimedb-9f958.firebaseapp.com",
  databaseURL: "https://realtimedb-9f958-default-rtdb.firebaseio.com",
  projectId: "realtimedb-9f958",
  storageBucket: "realtimedb-9f958.appspot.com",
  messagingSenderId: "761505016746",
  appId: "1:761505016746:web:942fba9e9fe3e6235699d3",
};

var fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();
