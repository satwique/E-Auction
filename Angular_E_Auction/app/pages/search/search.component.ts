import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _seller:SellerService,private route:ActivatedRoute ) { }
  id:any;
  buyer=[{
    firstName:'',
	 lastName:'',
  address:'',
	 city:'',
	 state:'',
	pin:'',
	 phone:'',
	email:'',
  bidAmount:'',
  
  
}]

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this._seller.showBids(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.buyer=data;
        console.log(this.buyer);
      },
      (error:any)=>{
      console.log(error)

      }
    )
  }

}
