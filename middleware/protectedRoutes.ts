import { useUsersStore } from '~/stores/UsersStore';
import { getAccessToken } from '~/services/localStorrage.service';

export default defineNuxtRouteMiddleware((to, from) => {
  const usersStore = useUsersStore();

  if (process.client) {
    const acessToken = getAccessToken();
    if (!acessToken && (to.path === '/users' || to.path === '/posts')) {
      return navigateTo('/signIn');
    }
    if (acessToken && !usersStore.currentUser.name) {
      usersStore.fill();
    }
  }
  usersStore.changeLoaderStatus(false);
});
