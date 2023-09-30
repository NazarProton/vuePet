import { LoginData, currentUser } from './../components/models';
import { registerData } from '~/components/models';
import { defineStore } from 'pinia';
import authService from '~/services/auth.service';
import userService from '~/services/users.service';
import { getDatabase, ref, child, get } from 'firebase/database';
import localStorageService, {
  getUserId,
} from '~/services/localStorrage.service';
import { auth } from '~/services/firebase';

export const useUsersStore = defineStore('users', {
  state: () => ({
    currentUser: null as currentUser | null,
    users: null as currentUser | null,
    userById: null as currentUser | null,
    isLoading: false,
  }),
  getters: {
    getCurrentUser: (state) => state.currentUser,
  },
  actions: {
    changeLoaderStatus(value: boolean) {
      this.isLoading = value;
    },
    signUpCurrentUser(data: registerData) {
      authService.register(data).then((newUser) => {
        if (newUser) {
          this.currentUser = newUser;
        }
      });
    },
    signInCurrentUser(data: LoginData) {
      authService.login(data).then(() => {
        // if (newUser) {
        //   this.currentUser = newUser;
        // }
      });
    },
    async logout() {
      try {
        await auth.signOut();
        localStorageService.removeAuthData();
        this.currentUser = null;
        console.log('Користувач вийшов з системи.');
      } catch (error) {
        console.error('Помилка при виході користувача:', error);
      }
    },

    async getUserById(id: string) {
      const userById = await userService.getUserById(id);
      if (this.currentUser?.id === userById.id) {
        this.currentUser = userById;
      }
      this.userById = userById;
    },
    async fill() {
      console.log(this.isLoading, 'BEFORE CHANGE');
      this.isLoading = true;
      console.log(this.isLoading, 'AFTER CHANGE');
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users`))
        .then((snapshot) => {
          console.log(this.isLoading, 'before IF');
          if (snapshot.exists()) {
            let currentUserId = getUserId();
            const allUsers = snapshot.val();
            this.users = allUsers;
            for (let key in allUsers) {
              if (key === currentUserId) {
                this.currentUser = allUsers[key];
              }
            }
            console.log(this.isLoading, 'in if');
          } else {
            console.log(this.isLoading, 'in else');
            console.log('No data available');
          }
        })
        .then(() => {
          console.log(this.isLoading, 'IN THEN');
          this.isLoading = false;
          console.log(this.isLoading, 'AFTRER CHANGE');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
