import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { UserModel } from '../models/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LocalStorageService } from '../services/localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userEvents = new BehaviorSubject<UserModel>(undefined);
  users = [];
  userExists: number;
  constructor(
    public db: AngularFirestore,
    private database: AngularFireDatabase,
    private router: Router,
    private jwtInterceptorService: JwtInterceptorService,
    private localStorageService: LocalStorageService
  ) {
    this.retrieveUser();
    this.db
      .collection('users')
      .get()
      .subscribe(querySnapshot =>
        querySnapshot.forEach(doc => this.users.push(doc.data()))
      );
  }

  register(login: string, password: string, birthYear: number) {
    return this.db.collection('users').add({
      login: login,
      password: password,
      birthYear: birthYear
    });
  }
  authenticate(login: string, password: string) {
    for (let user of this.users) {
      if (user.login == login && user.password == password) {
        this.userEvents.next(user);
        this.localStorageService.storeItem('rememberMe', user);
        this.jwtInterceptorService.setJwtToken(
          '196a489b-cd23-413f-8069-063d7d51714f'
        );
        return true;
      } else this.userExists = 0;
    }
  }  
  retrieveUser(): void {
    const user = this.localStorageService.getItem('rememberMe');
    if (user) {
      this.userEvents.next(user);
      this.jwtInterceptorService.setJwtToken(user.token);
    }
  }
  logout(): void {
    window.localStorage.clear();
    this.userEvents.next(null);
    this.jwtInterceptorService.removeJwtToken();
    this.router.navigate(['/']);
  }
  isUserConnected(): boolean {
    return this.localStorageService.getItem('rememberMe') ? true : false;
  }
}
