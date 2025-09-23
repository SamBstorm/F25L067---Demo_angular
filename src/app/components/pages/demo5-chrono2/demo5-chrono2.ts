import { Component, inject, Signal } from '@angular/core';
import { Chrono } from '../../../core/services/chrono';

@Component({
  selector: 'app-demo5-chrono2',
  imports: [],
  templateUrl: './demo5-chrono2.html',
  styleUrl: './demo5-chrono2.scss',
  providers : [Chrono]
})
export class Demo5Chrono2 {
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
