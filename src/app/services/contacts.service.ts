import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';

import { ShopMall } from 'src/app/model/ShopMall.model';
import { SHOPS } from '../DatasForContComp/shopsAddresses';
import { ServiceAddress } from 'src/app/model/ServiceAdrdess.model';
import { Cities } from '../DatasForContComp/CitiesContacts';
import { City } from '../model/Cities.model';

import { KYIVSHOP } from 'src/shopsAddresses';
import { LVIVSHOP } from 'src/shopsAddresses';
import { ODESSASHOP } from 'src/shopsAddresses';
import { kyivService } from 'src/app/DatasForContComp/addressesServiceCenters';
import { lvivService } from 'src/app/DatasForContComp/addressesServiceCenters';
import { odessaService } from 'src/app/DatasForContComp/addressesServiceCenters';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  // getCity(): Observable<City[]> {
  //   return of(Cities)
  //  }
  getShopKyiv(): Observable<ShopMall[]> {
    return of(KYIVSHOP)
  }
  getShopLviv(): Observable<ShopMall[]> {
    return of(LVIVSHOP)
  }
  getShopOdessa(): Observable<ShopMall[]> {
    return of(ODESSASHOP)
  }

  getServiceKyiv(): Observable<ServiceAddress[]> {
    return of(kyivService)
  }
  getServiceLviv(): Observable<ServiceAddress[]> {
    return of(lvivService)
  }
  getServiceOdessa(): Observable<ServiceAddress[]> {
    return of(odessaService)
  }

  // getOneCity(id: string | null): Observable<unknown> {
  //   return of(SHOPS.find(shop => shop.id === id));
  // }
}
