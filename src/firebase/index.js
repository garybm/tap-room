// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import '@firebase/storage';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDvPfvMN4LhrJkpB93z6ORBb20Zg-aX7TE',
  authDomain: 'tap-room-aa4ef.firebaseapp.com',
  databaseURL: 'https://tap-room-aa4ef.firebaseio.com',
  projectId: 'tap-room-aa4ef',
  storageBucket: 'tap-room-aa4ef.appspot.com',
  messagingSenderId: '433026704192'
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
  storage, firebase as default
};
