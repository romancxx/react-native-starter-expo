import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "@constants/actions";

export function login(username: string, password: string): any {
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
}

export function loginSuccess(): any {
  return {
    type: LOGIN_SUCCESS,
    payload: {},
  };
}

export function loginFail(error: any): any {
  return {
    error,
    type: LOGIN_FAIL,
  };
}

export function logout(): any {
  return {
    type: LOGOUT,
  };
}
