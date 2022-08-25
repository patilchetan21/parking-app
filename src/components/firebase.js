import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBZUgU73iEk6t2OcNh4zKvr7LSMS7swqTs",
        authDomain: "parkingapp-fdc8b.firebaseapp.com",
        projectId: "parkingapp-fdc8b",
        storageBucket: "parkingapp-fdc8b.appspot.com",
        messagingSenderId: "832493081948",
        appId: "1:832493081948:web:456c6304e9d26e2ea75d99"
})

var db = firebaseApp.firestore();
export { db };