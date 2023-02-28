import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public addproduct(product:any){
    return this.http.post(`${baseurl}/seller/add-product`,product);

   

    
  }
  public products(){
    return this.http.get(`${baseurl}/product/`)
  }
}
