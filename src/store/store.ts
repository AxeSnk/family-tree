import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { makeAutoObservable } from 'mobx';

import { auth } from '../firebase/firebase-config';

export default class Store {
  user = {} as User;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: User) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const useCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = useCredential;

      this.setAuth(true);
      this.setUser(user);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async registration(email: string, password: string) {
    try {
      const useCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const { user } = useCredential;

      this.setAuth(true);
      this.setUser(user);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  async logout() {
    try {
      signOut(auth);

      this.setAuth(false);
      this.setUser({} as User);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}
