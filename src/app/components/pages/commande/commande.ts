import { Component } from '@angular/core';
import { CommandeMenu } from "./commande-menu/commande-menu";
import { CommandePanier } from "./commande-panier/commande-panier";
import { IMenu } from '../../../core/models/imenu';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-commande',
  imports: [CommandeMenu, CommandePanier, JsonPipe],
  templateUrl: './commande.html',
  styleUrl: './commande.scss'
})
export class Commande {
  public menus : IMenu[];
  public panier : IMenu[] = [];

  constructor(){
    this.menus = [
      {         
        plat : 'Hamburger',
        drink : 'Soft'
      },
      {
        plat : 'Hamburger',
        drink : 'Café'
      },
      {
        plat : 'Hamburger',
        drink : 'Bière'
      },
      {         
        plat : 'Wrap',
        drink : 'Soft'
      },
      {
        plat : 'Wrap',
        drink : 'Café'
      },
      {
        plat : 'Wrap',
        drink : 'Bière'
      }
    ];
  }

  public onNewMenuChoose(menu : IMenu) : void{
    this.panier.push(menu);
  }
}
