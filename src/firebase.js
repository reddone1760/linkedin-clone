import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtAINlk3W3rk013fBHXAuAv9yuvmxG53k",
  authDomain: "linkedin-clone-adbcf.firebaseapp.com",
  projectId: "linkedin-clone-adbcf",
  storageBucket: "linkedin-clone-adbcf.appspot.com",
  messagingSenderId: "370799343365",
  appId: "1:370799343365:web:95a6f5f2c38c04bc61a96c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
