import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-advertisement',
  templateUrl: './banner-advertisement.component.html',
  styleUrls: ['./banner-advertisement.component.css']
})
export class BannerAdvertisementComponent implements OnInit {

  date = new Date();
  freeShipping = this.date.setDate(this.date.getDate() + 3);

  constructor() { }

  ngOnInit(): void {
  }

}
