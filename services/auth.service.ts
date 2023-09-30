import axios from 'axios';
import localStorageService from './localStorrage.service';
import { LoginData, currentUser, registerData } from '~/components/models';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // signOut,
} from 'firebase/auth';
import { auth, database } from './firebase';
import { ref, set } from 'firebase/database';

const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: 'AIzaSyAPnrowX-K-NrSBN_iOIWSF9xyE5VNtxek',
  },
});

const authService = {
  register: async (newUserData: registerData) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        newUserData.email,
        newUserData.password
      );
      await updateProfile(user, {
        displayName: newUserData.name,
      });
      const idToken = await user.getIdToken();

      localStorageService.setTokens({
        refreshToken: user.refreshToken,
        expiresIn: 3600,
        idToken,
        localId: user.uid,
      });
      const newUser: currentUser = {
        id: user.uid,
        name: newUserData.name,
        email: newUserData.email,
        lastName: newUserData.lastName,
        sex: newUserData.sex,
      };
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userRef = ref(database, `users/${user.uid}`);
          set(userRef, newUser);
        } else {
          console.log('Користувач не залогінений.');
        }
      });
      console.log('Користувач зареєстрований та дані додані до бази даних.');
      return newUser;
    } catch (error) {
      console.error('Помилка при реєстрації та додаванні даних:', error);
      return null;
    }
  },
  login: async (userData: LoginData) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const idToken = await user.getIdToken();
      localStorageService.setTokens({
        refreshToken: user.refreshToken,
        expiresIn: 3600,
        idToken,
        localId: user.uid,
      });
      console.log('Користувач успішно ввійшов в систему.');
      return user;
    } catch (error) {
      console.error('Помилка при вході користувача:', error);
      return null;
    }
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;
