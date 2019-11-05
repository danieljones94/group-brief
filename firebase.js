import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHv2Qwis_u-krFBJmI6jfTgJFxrS6KMLQ",
  authDomain: "dan-and-aleo-b.firebaseapp.com",
  databaseURL: "https://dan-and-aleo-b.firebaseio.com",
  projectId: "dan-and-aleo-b",
  storageBucket: "dan-and-aleo-b.appspot.com",
  messagingSenderId: "209053136032",
  appId: "1:209053136032:web:6f6f8cda788c09ebfdc5c5",
  measurementId: "G-MH44Z5YBGG"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
