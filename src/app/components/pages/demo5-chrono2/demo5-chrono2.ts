import { Component, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { Chrono } from '../../../core/services/chrono';
import { LocalStorageService } from '../../../core/services/local-storage-service';
import { ITimeHistory } from '../../../core/models/itime-history';

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
    this.timeHistory = this._localStorage.getItem('chrono2') ?? [];
    if(this.timeHistory.length > 0) 
      this._chronoService.time.set(this.timeHistory[this.timeHistory.length-1].time);
  }

  ngOnDestroy(): void {
    let dataSave = {
      date : new Date(),
      time : this.time()
    };
    this.timeHistory.push(dataSave);
    this._localStorage.setItem('chrono2',this.timeHistory);
  }
  
  public time : Signal<number> = this._chronoService.time;
  public timeHistory : ITimeHistory[] = [];

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
