import firebase from "firebase";

var config = {
  apiKey: "AIzaSyB0Nn9BCLKApRfmQ5LoDq5cxRThCGXPG6w",
  authDomain: "pickify-138f9.firebaseapp.com",
  projectId: "pickify-138f9",
  storageBucket: "pickify-138f9.appspot.com",
  messagingSenderId: "572569309327",
  appId: "1:572569309327:web:f0f611428bf633296b20fa",
  measurementId: "G-ZJQD0GPWXL"
};
const firebase_app = firebase.initializeApp(config);
const firebase_auth = firebase.auth(firebase_app);

export default firebase_auth;

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// } else {
//   firebase.app(); // if already initialized, use that one
// }
