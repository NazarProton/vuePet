// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAPnrowX-K-NrSBN_iOIWSF9xyE5VNtxek',
//   authDomain: 'work-test-todo.firebaseapp.com',
//   databaseURL:
//     'https://work-test-todo-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'work-test-todo',
//   storageBucket: 'work-test-todo.appspot.com',
//   messagingSenderId: '547904193862',
//   appId: '1:547904193862:web:1d190642549d5ef8601147',
//   measurementId: 'G-JNXBLJ6EJK',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const { email, password } = newUserData;
// const { data } = await httpAuth.post('accounts:signUp', {
//   email,
//   password,
//   returnSecureToken: true,
// });
// console.log(data);
// await axios.put(
//   `https://work-test-todo-default-rtdb.europe-west1.firebasedatabase.app/users/${data.localId}.json`,
//   {
//     ...newUserData,
//     id: data.localId,
//   },
//   {
//     headers: {
//       Authorization: data.idToken,
//     },
//   }
// );
// localStorageService.setTokens(data);
// return data;
