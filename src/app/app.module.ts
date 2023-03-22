import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { DiviceFullInfoComponent } from 'src/app/divice-full-info/divice-full-info.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ContactsComponent } from 'src/app/contacts/contacts.component';
import { FeedBackFormComponent } from 'src/app/feed-back-form/feed-back-form.component';
import { BannerAdvertisementComponent } from 'src/app/banner-advertisement/banner-advertisement.component';
import { ModalComponent } from 'src/app/modal/modal.component';

import { StuffService } from 'src/app/services/stuff.service';
import { CartService  } from 'src/app/services/shopping-cart.service';
import { LocalService } from 'src/app/services/local.service';
import { HttpService } from 'src/app/services/sendForm.service';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { SearchFilter } from 'src/app/pipes/searchFilter.pipe';
import { TypeofPipe } from 'src/app/pipes/typeof.pipe';
import { PricePipe } from 'src/app/pipes/price.pipe';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   imports: [
    BrowserModule,
    MaterialExampleModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MdbModalModule

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    DiviceFullInfoComponent,
    CartComponent,
    ContactsComponent,
    FeedBackFormComponent,
    BannerAdvertisementComponent,
    ModalComponent,
    FilterPipe,
    SearchFilter,
    TypeofPipe,
    PricePipe
  ],
  providers: [
    StuffService,
    CartService,
    LocalService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
