import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MessagesComponent } from './pages/messages/messages.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import {ProductDetailsComponent} from './pages/product-details/product-details.component';
import { RegisterComponent } from './pages/register/register.component';

import {DealsComponent} from './pages/products/deals/deals.component';
import {PizzaComponent} from './pages/products/pizza/pizza.component';
import {DrinksComponent} from './pages/products/drinks/drinks.component';
import {SaladComponent} from './pages/products/salad/salad.component';
import {DessertComponent} from './pages/products/dessert/dessert.component';
import {OrdersComponent} from './pages/orders/orders.component'
const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'messages',component:MessagesComponent},
  {path: 'orders',component:OrdersComponent},

  {path: 'menu/deals',component:DealsComponent},
  {path: 'menu/pizza',component:PizzaComponent},
  {path: 'menu/salad',component:SaladComponent},
  {path: 'menu/dessert',component:DessertComponent},
  {path: 'menu/drinks',component:DrinksComponent},
  {path: 'menu/:category/:id',component:ProductDetailsComponent},

  // {path: 'menu/:id',component:ProductDetailsComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},

  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
