import { LoginData, currentUser } from './../components/models';
import { registerData } from '~/components/models';
import { defineStore } from 'pinia';
import authService from '~/services/auth.service';
import userService from '~/services/users.service';
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
    changeCurrentUser(value: currentUser) {
      this.currentUser = value;
    },
    changeUsers(value: currentUser) {
      this.users = value;
    },
    changeLoaderStatus(value: boolean) {
      this.isLoading = value;
    },
    signUpCurrentUser(data: registerData) {
      authService.register(data).then(() => {
        userService.getUsers();
        navigateTo('/users');
      });
    },
    signInCurrentUser(data: LoginData) {
      authService.login(data).then(() => {
        userService.getUsers();
        navigateTo('/users');
      });
    },
    async logout() {
      try {
        await auth.signOut();
        localStorageService.removeAuthData();
        this.currentUser = null;
        navigateTo('/');
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
      userService.getUsers();
    },
  },
});
