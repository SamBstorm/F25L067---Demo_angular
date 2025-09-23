import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRandomUser } from '../models/irandom-user';

@Injectable({
  providedIn: 'root'
})
export class RandomUserAPI {
  private _http : HttpClient = inject(HttpClient);

  private _url : string = "https://randomuser.me/api";

  public getRandomUser() :Observable<IRandomUser> {
    return this._http.get<any>(this._url).pipe(
      map(data => { 
        return {
          lastname : data.results[0].name.last,
          firstname : data.results[0].name.first,
          url_pict : data.results[0].picture.large,
          email : data.results[0].email
        };
      })
    );
  }
}
