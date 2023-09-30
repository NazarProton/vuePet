export interface currentUser {
  id?: string;
  name: string;
  lastName: string;
  email: string;
  sex?: 'male' | 'female' | 'other';
  isLoggedin?: boolean;
}

export interface registerData extends currentUser {
  password: string;
}

export interface LoginData {
  password: string;
  email: string;
}
