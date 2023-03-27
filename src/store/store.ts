import { makeAutoObservable } from 'mobx';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

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
      const useCredential = await signInWithEmailAndPassword(auth, email, password);
      const { user } = useCredential;

      console.log('login, user', user);

      this.setAuth(true);
      this.setUser(user);
    } catch (error) {
      console.log('login error', error);
    }
  }

  async registration(email: string, password: string) {
    try {
      const useCredential = await createUserWithEmailAndPassword(auth, email, password);
      const { user } = useCredential;

      console.log('registration, user', user);

      this.setAuth(true);
      this.setUser(user);
    } catch (error) {
      console.log('registration, error', error);
    }
  }

  async logout() {
    try {
      signOut(auth);

      this.setAuth(false);
      this.setUser({} as User);
    } catch (error) {
      console.log('logout, error', error);
    }
  }
}
