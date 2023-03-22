import { Stuff } from 'src/app/model/Stuff.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class CartService {

    public cartItemList: any = [];
    public products: any = [];
    public productList = new BehaviorSubject<Stuff[]>([]);
    public search = new BehaviorSubject<string>("");

    getProducts(){
       return this.productList.asObservable();
    }

    setProduct( item: Stuff[]){
      this.cartItemList.push(item);
      this.productList.next(item)
    }

    addToCart(item: Stuff){
      this.cartItemList.push(item);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList)
    }

    getTotalPrice() : number{
      let grandTotal = 0;
      this.cartItemList.map((a:any)=>{
        grandTotal += a.total;
      })
      return grandTotal;
    }

    removeCartItem(item: any){
      this.cartItemList.map((a:any, index: any)=>{
        if(item.id === a.id){
          this.cartItemList.splice(index, 1);
        }
      })
      this.productList.next(this.cartItemList);
    }

    removeAllCart(){
      this.products = []
      this.productList.next(this.products);
    }

}
