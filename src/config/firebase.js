import * as firebase from 'firebase/app';
import 'firebase/database';
import'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCgpmwB3myXQiQhZWOhOIPn9CqTj8rl-2Y",
    authDomain: "olx-pk-1.firebaseapp.com",
    databaseURL: "https://olx-pk-1.firebaseio.com",
    projectId: "olx-pk-1",
    storageBucket: "olx-pk-1.appspot.com",
    messagingSenderId: "559997563542",
    appId: "1:559997563542:web:28596b9da5a44b045a08b7",
    measurementId: "G-1L61E8S8QG"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = new firebase.auth.GoogleAuthProvider();
 const storage = fb.storage();
 export default fb;
export {storage,auth};