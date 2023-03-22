import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as rxjs from 'rxjs';
import { Stuff } from 'src/app/model/Stuff.model';
import { DeviceDescription } from 'src/app/model/DeviceDescription.model';
import { environment } from '../environments/environment.prod';

@Injectable({ providedIn: 'root' })

export class StuffService {

  // private clientUrl: string = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';
  private Url: string = 'https://mate-academy.github.io/react_phone-catalog/api/products';

  constructor(private http: HttpClient) {}

  getStuff(): Observable<Stuff[]> {
   return this.http.get<Stuff[]>(`${environment.clientUrl}`)
  }

  getDevice(id: string | null): Observable<DeviceDescription> {
    console.log('2', id)
    const url = `${this.Url}/${id}.json`;
    return this.http.get<DeviceDescription>(url);
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  searchStuff(data: string): Observable<Stuff[]> {
    if(data.trim()!==""){
     return this.http.get<Stuff[]>(`${environment.clientUrl}/?name=${data.trim()}`).pipe(
       catchError(this.handleError)
     );
    } else {
     return this.http.get<Stuff[]>(environment.clientUrl).pipe(
       catchError(this.handleError)
     );
     }
   }

}



  // return this.http.get<Stuff>(this.clientUrl).pipe(
    //   map((items: Stuff[]) =>
    //     items.find((item) => item.id === id)
    //   )
    // );





