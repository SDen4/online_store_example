import { makeAutoObservable } from 'mobx';

export default class UserStore {
  // state
  private _user: {};
  private _isAuth: boolean;
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  // actions
  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: {}) {
    this._user = user;
  }

  // getters (computed functions)
  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
