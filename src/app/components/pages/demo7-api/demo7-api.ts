import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RandomUserAPI } from '../../../core/services/random-user-api';
import { IRandomUser } from '../../../core/models/irandom-user';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-demo7-api',
  imports: [],
  templateUrl: './demo7-api.html',
  styleUrl: './demo7-api.scss'
})
export class Demo7API implements OnInit{
  private _api : RandomUserAPI = inject(RandomUserAPI);
  private _cdr : ChangeDetectorRef = inject(ChangeDetectorRef);
  public randomUser$! : IRandomUser;

  ngOnInit(): void {
    this._api.getRandomUser().subscribe(
      {
        next : data => {
          console.log(data);          
          this.randomUser$ = data;
          this._cdr.markForCheck();
        },
        error : erreur => console.error(erreur)
      }
    );
  }
}
