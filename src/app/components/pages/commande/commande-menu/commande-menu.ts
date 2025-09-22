import { Component, inject } from '@angular/core';
import { IMenu } from '../../../../core/models/imenu';
import { MenuResto } from '../../../../core/services/menu-resto';

@Component({
  selector: 'app-commande-menu',
  imports: [],
  templateUrl: './commande-menu.html',
  styleUrl: './commande-menu.scss'
})
export class CommandeMenu {

  private _menuRestoService : MenuResto = inject(MenuResto);
  public menus : IMenu[] = this._menuRestoService.menus;
  
  // constructor(private _menuRestoService : MenuResto){
  //    this.menus = this._menuRestoService.menus;
  // }

  public onClickAjouter(menu : IMenu) : void {
    this._menuRestoService.ajouterMenu(menu);
  }
}
