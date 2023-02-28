import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  constructor(private http:HttpClient) { }

  public addBuyer(buyer:any){
    return this.http.post(`${baseurl}/buyer/place-bid`,buyer);
    

  }
  public buyers(){
    return this.http.get(`${baseurl}/buyer/`);
    

  }
  public update(id:any,email:any,amount:any){
    return this.http.get(`${baseurl}/buyer/update-bid/${id}/${email}/${amount}`)
    

  }

  public updatebid(buyer:any){
    return this.http.post(`${baseurl}/buyer/update-bid`,buyer);
  }
 
}
