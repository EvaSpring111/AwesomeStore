import { Component, OnInit } from '@angular/core';
import { CartService  } from 'src/app/services/shopping-cart.service';

import { FooterLinks } from 'src/app/model/FooterLinks.model';
import { HeaderNav } from 'src/app/model/HeaderNav.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'MyStore';

  public totalItem : number = 0;
  public searchTerm?: string;
  public searchvalue: any;
  public headerNav: HeaderNav[] = [
    {
      routerLink: "home",
      ariaLabel: "Home",
      title: "Home",
      href: "#",
    },
    {
      routerLink: "",
      ariaLabel: "Call us!",
      title: "Call us",
      href: "tel:8 (812) 123-45-67",
    },
    {
      routerLink: "",
      ariaLabel: "Suplier",
      title: "Suplier",
      href: "#",
    },
    {
      routerLink: "contacts",
      ariaLabel: "contacts",
      title: "Contacts",
      href: "#",
    }, 
  ];

  public links: FooterLinks[]  = [
    {
      name: 'News',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Blog',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'GitHub',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Twitter',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Events',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Meetups',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Support',
      link: 'https://www.techradar.com/news/phone-and-communications'
    },
    {
      name: 'Help',
      link: 'https://www.techradar.com/news/phone-and-communications'
    }
  ];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })
  }


}
