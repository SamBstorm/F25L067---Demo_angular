import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Chrono {
  public time : WritableSignal<number> = signal<number>(0);
  private _interval? : number = undefined;

  public start() : void{
    if(this._interval) return;
    this._interval = setInterval(
      () => {
        this.time.set(this.time() + 1);
      },
      1000
    );
  }

  public stop() : void{
    if(!this._interval) return;
    clearInterval(this._interval);
    this._interval = undefined;
  }

  public reset() : void{
    this.time.set(0);
  }
}
