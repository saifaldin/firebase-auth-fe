import firebase_auth from "./firebase-app";
import firebase from "firebase";

firebase_auth.onAuthStateChanged((user) => {
  if (user) {
    user.getIdToken().then((token) => {
      console.log(token);
    });
  }
});

export const loginUser = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase_auth
    .signInWithPopup(provider)
    .then((cred) => {
      console.log(cred);
    })
    .catch(console.error);
};

export const logoutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {});
};
