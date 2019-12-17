import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movingIn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
