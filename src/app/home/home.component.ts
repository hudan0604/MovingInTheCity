import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuComponent } from '../menu/menu.component';
import { ThemeService } from '../core/services/theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  darkMode: Subscription;
  dark: boolean;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.darkMode = this.themeService
      .toggleDarkMode()
      .subscribe((choice: any) => {
        console.log(choice);
        this.dark = choice;
      });
  }
  ngOnDestroy() {
    this.darkMode.unsubscribe();
  }
}
