import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJWjRdXEyymT-NzAI1DgXi3Fl3gwBxsOc",
  authDomain: "project-56cc5.firebaseapp.com",
  databaseURL: "https://project-56cc5.firebaseio.com",
  projectId: "project-56cc5",
  storageBucket: "project-56cc5.appspot.com",
  messagingSenderId: "893136778549",
  appId: "1:893136778549:web:4fe4dcfcbdab35009b087c",
  measurementId: "G-FRRKN3GHDE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };