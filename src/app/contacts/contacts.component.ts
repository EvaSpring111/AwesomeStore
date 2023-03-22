import { Component, OnInit } from '@angular/core';
import { ServiceAddress } from 'src/app/model/ServiceAdrdess.model';
import { City } from '../model/Cities.model';
import { ShopMall } from 'src/app/model/ShopMall.model';

import { ActivatedRoute} from '@angular/router';
// import { KYIVSHOP } from 'src/DatasF/shopsAddresses';
// import { LVIVSHOP } from 'src/shopsAddresses';
// import { ODESSASHOP } from 'src/shopsAddresses';
// import { kyivService } from 'src/app/DatasForContComp/addressesServiceCenters';
// import { lvivService } from 'src/app/DatasForContComp/addressesServiceCenters';
// import { odessaService } from 'src/app/DatasForContComp/addressesServiceCenters';

import { ContactsService } from 'src/app/services/contacts.service';
import { odessaService } from '../DatasForContComp/addressesServiceCenters';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  // cities: City[] = [];
  // oneCity: any = []
  kyivShop: ShopMall[] = [];
  lvivShop: ShopMall[] = [];
  odessaShop: ShopMall[] = [];

  kyivService: ServiceAddress[] = [];
  lvivService: ServiceAddress[] = [];
  odessaService: ServiceAddress[] = [];

  constructor( private contactsService: ContactsService, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    // this.getCity();
    this.getShopKyiv();
    this.getShopLviv();
    this.getShopOdessa();
    this.getServiceKyiv();
    this.getServiceLviv();
    this.getServiceOdessa()
  }

  getShopKyiv(){
    this.contactsService.getShopKyiv()
     .subscribe(kyivShop => this.kyivShop = kyivShop);
  }

  getShopLviv(){
    this.contactsService.getShopLviv()
      .subscribe(lvivShop => this.lvivShop = lvivShop);
  }
  getShopOdessa(){
    this.contactsService.getShopOdessa()
      .subscribe(odessaShop => this.odessaShop = odessaShop);
  }

  getServiceKyiv(){
    this.contactsService.getServiceKyiv()
      .subscribe(kyivService => this.kyivService = kyivService);
  }
  getServiceLviv(){
    this.contactsService.getServiceLviv()
      .subscribe(lvivService => this.lvivService = lvivService);
  }

  getServiceOdessa(){
    this.contactsService.getServiceOdessa()
      .subscribe(odessaService => this.odessaService = odessaService);
  }

  // getCity(){
  //   this.contactsService.getCity()
  //     .subscribe(cities => this.cities = cities);
  // }

  // getOneCity(): void {
  //   let id = this.route.snapshot.paramMap.get("id");
  //   this.contactsService.getOneCity(id)
  //   .subscribe((data) => {
  //     this.oneCity = data;
  // })
}


