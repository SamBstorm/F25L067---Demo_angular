import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { IMenu } from '../../../../core/models/imenu';

@Component({
  selector: 'app-commande-panier',
  imports: [],
  templateUrl: './commande-panier.html',
  styleUrl: './commande-panier.scss'
})
export class CommandePanier {
  public panier : InputSignal<IMenu[]> = input.required<IMenu[]>();
  public onMenuChoosen : OutputEmitterRef<IMenu> = output<IMenu>();

  public onClickSupprimer(menu : IMenu) : void{
    this.onMenuChoosen.emit(menu);
  }
}
