import { Component, OnInit, Input} from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Form } from '../model/Form.model';

import { HttpService } from 'src/app/services/sendForm.service';
import { CartService } from 'src/app/services/shopping-cart.service';
import { LocalService } from 'src/app/services/local.service';
import { FloatLabelType } from '@angular/material/form-field';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ HttpService]
})


export class CartComponent implements OnInit {

  public products : any = [];
  public prod : any = [];
  public grandTotal !: number;
  public grandtal !: number;
  cart: any

  checkoutForm = this.formBuilder.group({
    userName: '',
    selectCity: '',
    address: '',
    deliveryBy: '',
    email: '',
    mobileNumber: 0,
    dateOfDeliveryFrom: '',
    dateOfDeliveryTo: ''
  });

  form: Form = new Form("", "", "", "", "",  0, '', '');

  receivedDate: Form | undefined;

  constructor(
    private cartService : CartService,
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private localStore: LocalService
    ) {}

  ngOnInit(): void {
    this.cart =  this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

    var catrStuff = JSON.stringify(this.products);
    var priceStuff = JSON.stringify(this.grandTotal);
    this.localStore.saveData('id', catrStuff);
    this.localStore.saveData('id$', priceStuff);
    console.log('Cart has: ', JSON.parse(this.localStore.getData('id')));
    this.prod = JSON.parse(this.localStore.getData('id'));

    console.log('Cart has: ', JSON.parse(this.localStore.getData('id$')));
    this.grandtal = JSON.parse(this.localStore.getData('id$'));
  })
  }

  removeItem(age: number){
    this.cartService.removeCartItem(age);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  userName = new FormControl('', [Validators.required,  Validators.pattern('[a-zA-Zа-яА-Я]*')])

  getNameErrorMessage() {
    if (this.userName.hasError('required') || this.userName.hasError('pattern')){
      return `Please, enter your name.
              Name could include only letters`;
    }
    return this.userName.hasError('userName') ? 'Not a valid name' : '';
  }

  selectCity = new FormControl('', [Validators.required]);

  getCityErrorMessage(){
    if(this.selectCity.hasError('required')){
      return 'Please, choice your city'
    }
    return `${this.selectCity}`
  }

  address = new FormControl('', [Validators.required],);

  getAddressErrorMessage() {
    if (this.address.hasError('required')) {
      return 'Please, enter your address';
    }

    return this.address.hasError('address') ? 'Not a valid address' : '';
  }

  deliveryBy = new FormControl('', [Validators.required])

  email = new FormControl('', [Validators.required, Validators.email]);

  getMailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please,  enter your mail';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  mobileNumber = new FormControl('', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])

  getMobileErrorMessage() {
    if (this.mobileNumber.hasError('required') || this.mobileNumber.hasError('pattern')){
      return `Please, enter your mobile number.
              Sample (098)1234567`;
    }
    return this.mobileNumber.hasError('mobileNumber') ? 'Not a valid number' : '';
  }

  dateOfDeliveryFrom = new FormControl('', [Validators.required]);
  dateOfDeliveryTo = new FormControl('', [Validators.required]);


  onSubmit(form: Form) {
    // if ( this.userName.hasError('required') ){
    //   console.log('error', console.error());
    //   return
    // }
    console.warn('Your order has been submitted', this.checkoutForm.value);

    this.httpService.postData(form)
    .subscribe({
        next:(data: any) => {
          this.receivedDate = data;
        },
          error: error => console.log(error)

    });

    this.checkoutForm.reset();
    this.prod.length = 0;
    this.grandtal = 0;
  }

  date = new Date();
  freeShipping = this.date.setDate(this.date.getDate() + 3);

}
