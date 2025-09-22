import { Component, inject } from '@angular/core';
import { IMenu } from '../../../../core/models/imenu';
import { MenuResto } from '../../../../core/services/menu-resto';

@Component({
  selector: 'app-commande-panier',
  imports: [],
  templateUrl: './commande-panier.html',
  styleUrl: './commande-panier.scss'
})
export class CommandePanier {
  private _menuRestoService : MenuResto = inject(MenuResto);
  public panier : IMenu[] = this._menuRestoService.panier;

  public onClickSupprimer(menu : IMenu) : void{
    this._menuRestoService.supprimerMenu(menu);
  }
}
