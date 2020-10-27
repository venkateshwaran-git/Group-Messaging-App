import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCNf81m9Qdzcxku1jk0wyhZPV9IlRJmqIs",
  authDomain: "group-text-messaging.firebaseapp.com",
  databaseURL: "https://group-text-messaging.firebaseio.com",
  projectId: "group-text-messaging",
  storageBucket: "group-text-messaging.appspot.com",
  messagingSenderId: "164245210145",
  appId: "1:164245210145:web:b791657c25507012ae4f60",
  measurementId: "G-L18ZTXVMEZ"

});

const db = firebaseApp.firestore();

export default db;