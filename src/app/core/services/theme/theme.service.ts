import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = new BehaviorSubject<boolean>(false);
  choice = true;
  constructor(private localStorageService: LocalStorageService) {}
  toggleDarkMode(): any {
    this.choice = !this.choice;
    this.localStorageService.deleteItem('darkMode');
    this.localStorageService.storeItem('darkMode', this.choice);
    this.darkMode.next(this.localStorageService.getItem('darkMode'));
    return this.darkMode.asObservable();
  }
}
