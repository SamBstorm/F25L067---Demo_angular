import { INavbarItem } from './../../core/models/inavbar-item';
import { Component } from '@angular/core';
import { NavbarLink } from "./navbar-link/navbar-link";

@Component({
  selector: 'app-navbar',
  imports: [NavbarLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  public items : INavbarItem[];

  constructor(){
    this.items = [
      {
        text : "Démonstrations",
        navbarChildren : [
          {
            text : "Démonstration 1",
            url : "/demo1",
            navbarChildren : []
          },
          {
            text : "Démonstration 2",
            url : "/demo2",
            navbarChildren : []
          },
          {
            text : "Démonstration 3 - Service - Commande",
            url : "/demo3",
            navbarChildren : []
          },
          {
            text : "Démonstration 4 - Service - Ticket",
            url : "/demo4",
            navbarChildren : []
          },
          {
            text : "Démonstration 5 - Service - Chrono1",
            url : "/demo5chrono1",
            navbarChildren : []
          },
          {
            text : "Démonstration 5 - Service - Chrono2",
            url : "/demo5chrono2",
            navbarChildren : []
          },
          {
            text : "Démonstration 7 - Service - API",
            url : "/demo7",
            navbarChildren : []
          },
        ]
      },
      {
        text : "Exercices",
        navbarChildren : []
      }
    ];
  }
}
