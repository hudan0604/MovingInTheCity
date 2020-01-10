import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../core/services/localStorage/local-storage.service';
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
      .getDarkMode()  
      .subscribe((choice: any) => {        
        this.dark = choice;
      });
  }
  ngOnDestroy() {
    this.darkMode.unsubscribe();
  }
}
