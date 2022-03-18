import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDe6SZIOZ1rwma_-7Q3Ukua3z_rcvxWCso",
  authDomain: "netflix-clone-e634a.firebaseapp.com",
  projectId: "netflix-clone-e634a",
  storageBucket: "netflix-clone-e634a.appspot.com",
  messagingSenderId: "990222402325",
  appId: "1:990222402325:web:9f79ead889e78b81049f1c",
  measurementId: "G-JERW9XNZFS"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
// export default storage

