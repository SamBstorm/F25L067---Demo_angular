import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { IMenu } from '../../../../core/models/imenu';

@Component({
  selector: 'app-commande-menu',
  imports: [],
  templateUrl: './commande-menu.html',
  styleUrl: './commande-menu.scss'
})
export class CommandeMenu {
  public menus : InputSignal<IMenu[]> = input.required<IMenu[]>();
  public onMenuChoosen : OutputEmitterRef<IMenu> = output<IMenu>();

  public onClickAjouter(menu : IMenu) : void {
    this.onMenuChoosen.emit(menu);
    console.log(menu);
  }
}
