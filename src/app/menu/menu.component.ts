import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../core/auth/user.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UserModel } from '../core/models/user.model';
import { ThemeService } from '../core/services/theme/theme.service';
import { LocalStorageService } from '../core/services/localStorage/local-storage.service';

@Component({
  selector: 'movingIn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  showMenu = false;
  userEventsSubscription: Subscription;
  userAuthenticated: UserModel;
  darkMode = false;

  constructor(
    private userService: UserService,
    private themeService: ThemeService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(
      user => (this.userAuthenticated = user)
    );
    this.darkMode = this.localStorageService.getItem('darkMode');
  }
  ngOnDestroy() {
    this.userEventsSubscription.unsubscribe();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  toggleDarkMode(): any {
    this.darkMode = !this.darkMode;
    this.themeService.toggleDarkMode(this.darkMode);
  }
  logout(): void {
    return this.userService.logout();
  }
}
