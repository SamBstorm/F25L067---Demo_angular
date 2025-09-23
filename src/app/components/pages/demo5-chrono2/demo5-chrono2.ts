import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { Chrono } from '../../../core/services/chrono';
import { LocalStorageService } from '../../../core/services/local-storage-service';

@Component({
  selector: 'app-demo5-chrono2',
  imports: [],
  templateUrl: './demo5-chrono2.html',
  styleUrl: './demo5-chrono2.scss',
  providers : [Chrono]
})
export class Demo5Chrono2 implements OnDestroy, OnInit {
  private _chronoService : Chrono = inject(Chrono);
  private _localStorage : LocalStorageService = inject(LocalStorageService);
  
  ngOnInit(): void {
    let saveTime : number | null = this._localStorage.getItem<number>('chrono2');
    if(saveTime) this._chronoService.time.set(saveTime);
  }

  ngOnDestroy(): void {
    this._localStorage.setItem<number>('chrono2',this.time());
  }
  
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
