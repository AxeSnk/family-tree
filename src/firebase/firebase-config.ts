import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBjFQrmMa-32eZML4yqis1XF0pmGZPQFUs',
  authDomain: 'family-tree-e9224.firebaseapp.com',
  projectId: 'family-tree-e9224',
  storageBucket: 'family-tree-e9224.appspot.com',
  messagingSenderId: '285962078994',
  appId: '1:285962078994:web:e28cbf7fae840afdde41cb',
  measurementId: 'G-977QGPC9NM',
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
