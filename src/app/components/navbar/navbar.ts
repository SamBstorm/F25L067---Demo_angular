import { INavbarItem } from './../../core/models/inavbar-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  public items : INavbarItem[];

  constructor(){
    this.items = [
      {
        text : "Démonstrations",
        navbarChildren : []
      },
      {
        text : "Exercices",
        navbarChildren : []
      }
    ];
  }
}
