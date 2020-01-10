import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  choice = true;
  darkMode = new BehaviorSubject<boolean>(
    this.localStorageService.getItem('darkMode')
  );
  constructor(private localStorageService: LocalStorageService) {}
  toggleDarkMode(darkMode: boolean): any {
    this.localStorageService.deleteItem('darkMode');
    this.localStorageService.storeItem('darkMode', darkMode);
    this.darkMode.next(this.localStorageService.getItem('darkMode'));
  }
  getDarkMode(): any {
    return this.darkMode.asObservable();
  }
}
