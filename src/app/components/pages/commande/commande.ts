import { Component } from '@angular/core';
import { CommandeMenu } from "./commande-menu/commande-menu";
import { CommandePanier } from "./commande-panier/commande-panier";

@Component({
  selector: 'app-commande',
  imports: [CommandeMenu, CommandePanier],
  templateUrl: './commande.html',
  styleUrl: './commande.scss'
})
export class Commande {
  
}
