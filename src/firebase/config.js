import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrO1k2tfC8zWK-NcKp1fj0ogM_SZE7m_s",
    authDomain: "testproject-33854.firebaseapp.com",
    projectId: "testproject-33854",
    storageBucket: "testproject-33854.appspot.com",
    messagingSenderId: "400255131820",
    appId: "1:400255131820:web:2de5856426debdb8047f09",
    measurementId: "G-CM0G24EVQG"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectAuth, projectFirestore, timestamp }