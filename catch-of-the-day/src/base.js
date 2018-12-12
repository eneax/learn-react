import Rebase from "re-base"; // mirror state to Firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAnVhPQ09gCjZVevKxrGBWfgQcAFUQO48w",
  authDomain: "catch-of-the-day-eneax.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-eneax.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
