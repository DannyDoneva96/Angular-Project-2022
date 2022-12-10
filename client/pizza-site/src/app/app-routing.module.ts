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

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'messages',component:MessagesComponent},

  // {path: 'menu/deals',component:MenuComponent},
  // {path: 'menu/pizza',component:MenuComponent},
  // {path: 'menu/salad',component:MenuComponent},
  // {path: 'menu/dessert',component:MenuComponent},
  // {path: 'menu/drinks',component:MenuComponent},

  {path: 'menu/:id',component:ProductDetailsComponent},
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
