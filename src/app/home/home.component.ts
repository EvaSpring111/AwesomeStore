import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchFilter } from 'src/app/pipes/searchFilter.pipe';
import { PricePipe } from 'src/app/pipes/price.pipe';

import { Stuff } from 'src/app/model/Stuff.model';
import { DeviceDescription } from 'src/app/model/DeviceDescription.model';

import { StuffService } from 'src/app/services/stuff.service';
import { CartService } from 'src/app/services/shopping-cart.service';

import { ModalComponent  } from 'src/app/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ SearchFilter, PricePipe]
})

export class HomeComponent implements OnInit {

  stuff: Stuff[] = [];
  device: DeviceDescription | undefined;
  public filterCategory : any;
  public filterByPrice: any;

  public productList : any ;
  productsPerPage: number = 4;
  public selectedPage: number = 1;

  modalRef: MdbModalRef<ModalComponent> | null= null;

  constructor(
    private stuffService: StuffService,
    private route: ActivatedRoute,
    private cartService: CartService,
    public searchFilter: SearchFilter,
    public priceFilter: PricePipe,
    private modalService: MdbModalService
    ) { }

  searchvalue: string = "";
  minPrice: number = 0 ;
  maxPrice: number = 0;

  length: number | undefined;
  totalLength: any;
  page: number = 1;
  showpost: any = [];


  ngOnInit() {
    this.stuffService
    .getStuff()
    .subscribe((data: Stuff[]) => {
      this.stuff = data;
      this.totalLength = data.length;
      this.productList = data;
      this.filterCategory = data;
      this.productList.forEach((a: any) => {
        if(a.type === "phone"){
          a.type = "phone"
        } else if( a.type === "tablet"){
          a.type = "tablet"
        }

        Object.assign(a, {
          quantity: 1,
          total : a.discount ? a.price -(a.price  / 100 * a.discount) : a.price
        });
      });
    });
  }

  getDevice(): void {
    let id = this.route.snapshot.paramMap.get("id");
    let dataSource =  this.stuffService.getDevice(id)
    .subscribe((data: DeviceDescription) => {
      this.device = data;
      return dataSource
  })
}

  addToCart(item: Stuff): void{
    this.cartService.addToCart(item);
  }

  filterType(type: string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.type == type || type ==''){
        return a;
      }
    })
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: this.device?.name }
    })
  }
}




