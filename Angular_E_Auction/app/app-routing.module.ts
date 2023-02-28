import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerComponent } from './pages/seller/seller.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { SellerSignupComponent } from './pages/seller-signup/seller-signup.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { BuyerSignupComponent } from './pages/buyer-signup/buyer-signup.component';
import { BuyerLoginComponent } from './pages/buyer-login/buyer-login.component';
import { SellerPageComponent } from './pages/seller-page/seller-page.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ShowBidComponent } from './pages/show-bid/show-bid.component';
import { BuyerPage1Component } from './pages/buyer-page1/buyer-page1.component';
import { SearchComponent } from './pages/search/search.component';
import { BuyerUpdateComponent } from './pages/buyer-update/buyer-update.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:"full", 
  },
  {
    path:'seller',
    component:SellerComponent,
    pathMatch:"full", 
  },
  {
    path:'buyer',
    component:BuyerComponent,
    pathMatch:"full", 
  },
  {
    path:'seller-signup',
    component:SellerSignupComponent,
    pathMatch:"full", 
  },
  {
    path:'seller-login',
    component:SellerLoginComponent,
    pathMatch:"full", 
  },
  {
    path:'buyer-signup',
    component:BuyerSignupComponent,
    pathMatch:"full", 
  },
  {
    path:'buyer-login',
    component:BuyerLoginComponent,
    pathMatch:"full", 
  },
  {
    path:'add-product/:id',
    component:AddProductComponent,
    pathMatch:"full", 
  },
  {
    path:'show-bid',
    component:ShowBidComponent,
    pathMatch:"full", 
  },
  {
    path:'seller-page/:id',
    component:SellerPageComponent,
    pathMatch:"full", 
  },
  {
    path:'buyer-page1/:id',
    component:BuyerPage1Component,
    pathMatch:"full", 
  },
  {
    path:'search/:id',
    component:SearchComponent,
    pathMatch:"full", 
  },
  {
    path:'buyer-update/:id',
    component:BuyerUpdateComponent,
    pathMatch:"full", 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
