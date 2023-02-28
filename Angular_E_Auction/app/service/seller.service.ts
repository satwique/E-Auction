import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  public addSeller(seller:any){
    return this.http.post(`${baseurl}/seller/`,seller);
    

  }
  public Sellers(){
    return this.http.get(`${baseurl}/seller/`);
    

  }

  public showBids(id:any){
    return this.http.get(`${baseurl}/seller/show-bids/${id}`);
    

  }
}
