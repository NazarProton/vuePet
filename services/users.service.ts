// import { IUser } from './../components/ComponentsTypes';
// import { http } from './http.service';
import { database } from './firebase';
import { ref, get, getDatabase, child } from 'firebase/database';
import { getUserId } from './localStorrage.service';
import { useUsersStore } from '~/stores/UsersStore';

const userEndpoint = 'users';

const userService = {
  getUsers: async () => {
    const dbRef = ref(getDatabase());
    const userStore = useUsersStore();
    userStore.changeLoaderStatus(true);
    get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let currentUserId = getUserId();
          const allUsers = snapshot.val();
          userStore.changeUsers(allUsers);
          for (let key in allUsers) {
            if (key === currentUserId) {
              userStore.changeCurrentUser(allUsers[key]);
            }
          }
        } else {
          console.log('No data available');
        }
      })
      .then(() => {
        userStore.changeLoaderStatus(false);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  getUserById: async (userId: string) => {
    try {
      const userRef = ref(database, `${userEndpoint}/${userId}`);
      const userSnapshot = await get(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.val();
        return userData;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Помилка при отриманні користувача:', error);
      return null;
    }
  },
  // updateCurrentUser:
  // updateCurrentUserAvatar: async (formData: File): Promise<IUser> => {
  //   const headers: {} = {
  //     'Content-Type': 'multipart/form-data',
  //   };
  //   const body = new FormData();
  //   body.append('avatar', formData, formData.name);
  //   const { data } = await http.put<IUser>(
  //     `${userEndpoint}/upload/${localStorageService.getUserId()}`,
  //     body,
  //     headers
  //   );
  //   localStorageService.updateCurrentUser(data);
  //   return data;
  // },
  // update:
  // delete: async (): Promise<void> => {
  //   const currentUserId = localStorageService.getUserId();
  //   console.log(currentUserId);
  //   await http.delete(`${userEndpoint}/${localStorageService.getUserId()}`);
  //   localStorageService.removeAuthData();
  // },
};
export default userService;
