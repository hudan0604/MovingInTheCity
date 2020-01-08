import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../core/auth/user.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { UserModel } from '../core/models/user.model';
import { ThemeService } from '../core/services/theme/theme.service';

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
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.userEventsSubscription = this.userService.userEvents.subscribe(
      user => (this.userAuthenticated = user)
    );
  }
  ngOnDestroy() {
    this.userEventsSubscription.unsubscribe();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
  toggleDarkMode(): any {
    this.darkMode = !this.darkMode;
    this.themeService.toggleDarkMode();
  }
  logout(): void {
    return this.userService.logout();
  }
}
