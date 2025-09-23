import { Component, inject } from '@angular/core';
import { MenuResto } from '../../../core/services/menu-resto';
import { IMenu } from '../../../core/models/imenu';

@Component({
  selector: 'app-ticket-commande',
  imports: [],
  templateUrl: './ticket-commande.html',
  styleUrl: './ticket-commande.scss'
})
export class TicketCommande {
  private _menuRestoService : MenuResto = inject(MenuResto);
  public panier : IMenu[] = this._menuRestoService.panier;
}
