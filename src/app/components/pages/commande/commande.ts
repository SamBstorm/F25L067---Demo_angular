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

  public onRemoveMenuChoose(menu : IMenu) : void{
    // Attention, le filter() filtre TOUT menu correspondant
    // this.panier = this.panier.filter(m => m != menu);
    // Nous voulons en supprimer un seul!

    let index : number = this.panier.indexOf(menu);
    //this.panier = this.panier.filter((m,i) => i != index);
    this.panier.splice(index,1);
  }
}
