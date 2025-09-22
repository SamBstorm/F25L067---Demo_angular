import { IMenu } from './../models/imenu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuResto {
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

  public ajouterMenu(menu : IMenu) : void{
    this.panier.push(menu);
  }

  public supprimerMenu(menu : IMenu) : void{
    let index : number = this.panier.indexOf(menu);
    this.panier.splice(index,1);
  }
}
