import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7QK7m6W_Kdelfw_Lc5NyK3ZemLDqNu4w",
  authDomain: "tinderclone-45105.firebaseapp.com",
  databaseURL: "https://tinderclone-45105.firebaseio.com",
  projectId: "tinderclone-45105",
  storageBucket: "tinderclone-45105.appspot.com",
  messagingSenderId: "935161646977",
  appId: "1:935161646977:web:a89807576bc69fb1c2e280",
  measurementId: "G-P1RED37VDT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
