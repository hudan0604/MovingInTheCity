import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  storeItem(key: string, value: any) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  deleteItem(key: string): void {
    return window.localStorage.removeItem(key);
  }
}
