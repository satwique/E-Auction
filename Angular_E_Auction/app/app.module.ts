import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SellerComponent } from './pages/seller/seller.component';
import { BuyerComponent } from './pages/buyer/buyer.component';
import { SellerNavbarComponent } from './pages/seller-navbar/seller-navbar.component';
import { BuyerNavbarComponent } from './pages/buyer-navbar/buyer-navbar.component';
import { SellerSignupComponent } from './pages/seller-signup/seller-signup.component';
import { SellerLoginComponent } from './pages/seller-login/seller-login.component';
import { BuyerSignupComponent } from './pages/buyer-signup/buyer-signup.component';
import { BuyerLoginComponent } from './pages/buyer-login/buyer-login.component';

import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SellerPageComponent } from './pages/seller-page/seller-page.component';
import {MatButtonModule} from '@angular/material/button';
import { SellerSidebarComponent } from './pages/seller-sidebar/seller-sidebar.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ShowBidComponent } from './pages/show-bid/show-bid.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { BuyerPageComponent } from './buyer-page/buyer-page.component';
import { BuyerPage1Component } from './pages/buyer-page1/buyer-page1.component';
import { SearchComponent } from './pages/search/search.component';
import { BuyerUpdateComponent } from './pages/buyer-update/buyer-update.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SellerComponent,
    BuyerComponent,
    SellerNavbarComponent,
    BuyerNavbarComponent,
    SellerSignupComponent,
    SellerLoginComponent,
    BuyerSignupComponent,
    BuyerLoginComponent,
    SellerPageComponent,
    SellerSidebarComponent,
    AddProductComponent,
    ShowBidComponent,
    BuyerPageComponent,
    BuyerPage1Component,
    SearchComponent,
    BuyerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,MatCardModule,
    FormsModule ,
HttpClientModule,
MatSnackBarModule,
MatInputModule,MatButtonModule,
MatListModule,
MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
