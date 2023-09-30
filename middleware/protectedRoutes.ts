import { currentUser } from '~/components/models';
import { useUsersStore } from '~/stores/UsersStore';
import { app } from './../services/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAccessToken } from '~/services/localStorrage.service';

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = getAuth(app);
  const usersStore = useUsersStore();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //     navigateTo('/users');
  //     console.log('Користувач увійшов у систему:', user);
  //   } else {
  //     console.log('Користувач вийшов з системи.');

  //     navigateTo('/');
  //   }
  // });

  if (process.client) {
    const acessToken = getAccessToken();
    if (!acessToken && (to.path === '/users' || to.path === '/posts')) {
      // usersStore.changeLoaderStatus(false);
      return navigateTo('/signIn');
    }
    if (acessToken && !usersStore.currentUser) {
      console.log('hrererer');
      usersStore.fill();
    }
  }
});
