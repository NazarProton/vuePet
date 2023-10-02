import { useUsersStore } from '~/stores/UsersStore';
import { getAccessToken } from '~/services/localStorrage.service';

export default defineNuxtRouteMiddleware((to, from) => {
  const usersStore = useUsersStore();
  if (process.client) {
    const acessToken = getAccessToken();
    if (acessToken && (to.path === '/signUp' || to.path === '/signIn')) {
      return navigateTo('/');
    }
    if (acessToken && !usersStore.currentUse.name) {
      usersStore.fill();
    }
  }
});
