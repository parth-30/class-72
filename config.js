import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
  apiKey: "AIzaSyAL5QCAiN6XeToBomnHm2XGUhepJmYs9Bw",
  authDomain: "wili-efd8c.firebaseapp.com",
  projectId: "wili-efd8c",
  storageBucket: "wili-efd8c.appspot.com",
  messagingSenderId: "546157866767",
  appId: "1:546157866767:web:008b7bc99a8020af75987a"
  };
 
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();

 