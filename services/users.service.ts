// import { IUser } from './../components/ComponentsTypes';
// import { http } from './http.service';
import { database } from './firebase';
import { ref, get } from 'firebase/database';

const userEndpoint = 'users';

// let users: IUser[];
// let usersIds: string[] = [];
// interface IPagination {
//   skip: number;
//   limit: number;
//   total: number;
// }
// interface IResponseSuccess<T> {
//   data: T;
// }

// interface IResponseUsers extends IResponseSuccess<IUser[]>, IPagination {}

const userService = {
  // getUsers: async (currentPage: number): Promise<IUser[]> => {
  //   const { data } = await http.get<IResponseUsers>(
  //     `${userEndpoint}?limit=${currentPage ? `10&skip=${currentPage}` : '10'}`
  //   );
  //   users = !currentPage ? data.data : [...users, ...data.data];
  //   return users;
  // },
  getUserById: async (userId: string) => {
    try {
      const userRef = ref(database, `${userEndpoint}/${userId}`);
      const userSnapshot = await get(userRef);

      if (userSnapshot.exists()) {
        // Дані користувача знайдені
        const userData = userSnapshot.val();
        return userData;
      } else {
        // Користувача з таким ID не знайдено
        return null;
      }
    } catch (error) {
      console.error('Помилка при отриманні користувача:', error);
      return null;
    }
  },
  // updateCurrentUser: async (Newdata: IUser): Promise<IUser> => {
  //   const { data } = await http.patch<IUser>(
  //     `${userEndpoint}/${localStorageService.getUserId()}`,
  //     Newdata
  //   );
  //   return data;
  // },
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
  // update: async (payload: IUser): Promise<IUser> => {
  //   const { data } = await http.patch<IUser>(
  //     userEndpoint + localStorageService.getUserId(),
  //     payload
  //   );
  //   return data;
  // },
  // delete: async (): Promise<void> => {
  //   const currentUserId = localStorageService.getUserId();
  //   console.log(currentUserId);
  //   await http.delete(`${userEndpoint}/${localStorageService.getUserId()}`);
  //   localStorageService.removeAuthData();
  // },
};
export default userService;
