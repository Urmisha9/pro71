import firebase from "firebase";
//("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCQnlQG08wWGhRJT3tQqv9wG7vbySpCxOo",
    authDomain: "e-ride-41787.firebaseapp.com",
    projectId: "e-ride-41787",
    storageBucket: "e-ride-41787.appspot.com",
    messagingSenderId: "18998511882",
    appId: "1:18998511882:web:b877f1656e7a55c4aa92f3"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


