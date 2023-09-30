import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAPnrowX-K-NrSBN_iOIWSF9xyE5VNtxek',
  authDomain: 'work-test-todo.firebaseapp.com',
  databaseURL:
    'https://work-test-todo-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'work-test-todo',
  storageBucket: 'work-test-todo.appspot.com',
  messagingSenderId: '547904193862',
  appId: '1:547904193862:web:1d190642549d5ef8601147',
  measurementId: 'G-JNXBLJ6EJK',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
