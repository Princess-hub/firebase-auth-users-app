import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBnlyHaHSOpf7otDfRS6YFPWvI2VEEZM0",
    authDomain: "users-app-fc190.firebaseapp.com",
    projectId: "users-app-fc190",
    storageBucket: "users-app-fc190.appspot.com",
    messagingSenderId: "938500033603",
    appId: "1:938500033603:web:ad1bac24bece85842a58f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.firestore();

  export default firebase;