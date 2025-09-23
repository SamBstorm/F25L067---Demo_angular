import { Component, inject, Signal } from '@angular/core';
import { Chrono } from '../../../core/services/chrono';

@Component({
  selector: 'app-demo5-chrono1',
  imports: [],
  templateUrl: './demo5-chrono1.html',
  styleUrl: './demo5-chrono1.scss'
})
export class Demo5Chrono1 {
  private _chronoService : Chrono = inject(Chrono);
  public time : Signal<number> = this._chronoService.time;

  public onClickStart() : void{
    this._chronoService.start();
  }

  public onClickStop() : void{
    this._chronoService.stop();
  }

  public onClickReset() : void{
    this._chronoService.reset();
  }
}
