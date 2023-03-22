import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { DiviceFullInfoComponent } from 'src/app/divice-full-info/divice-full-info.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ContactsComponent } from 'src/app/contacts/contacts.component';

const routes: Routes = [
  { path: 'products/:id', component: DiviceFullInfoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart',  component: CartComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent  },
  { path: '**', component: NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
