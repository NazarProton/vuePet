const ACCESS_TOKEN_KEY = 'acess-token';
const REFRESH_KEY = 'refresh-token';
const EXPIRES_KEY = 'token-expires';
const USERID_KEY = 'user-local-id';

export function setTokens({
  refreshToken,
  expiresIn = 3600,
  localId,
  idToken,
}: {
  refreshToken: string;
  expiresIn: number;
  localId: string;
  idToken: string;
}) {
  const expiresDate: string = (
    new Date().getTime() +
    expiresIn * 1000
  ).toString();
  localStorage.setItem(USERID_KEY, localId);
  localStorage.setItem(ACCESS_TOKEN_KEY, idToken);
  localStorage.setItem(REFRESH_KEY, refreshToken);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY);
}
export function removeAuthData() {
  localStorage.removeItem(USERID_KEY);
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}
export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY);
}

const localStorageService = {
  setTokens,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  removeAuthData,
};

export default localStorageService;
