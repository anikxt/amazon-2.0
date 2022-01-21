import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC21FEc0-QmzOIv7JsYzJsbXhr_uHxqOl0',
  authDomain: 'v2-62572.firebaseapp.com',
  projectId: 'v2-62572',
  storageBucket: 'v2-62572.appspot.com',
  messagingSenderId: '187651453306',
  appId: '1:187651453306:web:924ada2c99bc8c1fc266c3',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

// no analitycs
// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
