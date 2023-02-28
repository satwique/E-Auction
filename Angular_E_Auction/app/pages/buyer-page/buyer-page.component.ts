import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';

@Component({
  selector: 'app-buyer-page',
  templateUrl: './buyer-page.component.html',
  styleUrls: ['./buyer-page.component.css']
})
export class BuyerPageComponent implements OnInit {
  id:any;
  buyer={
    firstName:'',
	 lastName:'',
  address:'',
	 city:'',
	 state:'',
	pin:'',
	 phone:'',
	email:'',
  bidAmount:'',
  product:{
    id:'',
    prodcutName:''
  }

}
buyer1:any;
  constructor(private _buyer:BuyerService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this._buyer.buyers().subscribe((data:any)=>{
      this.buyer1=data;
    },
    (error:any)=>{
      console.log(error);
    })
    


    for(let i=0;i<this.buyer1.length;i++){
      if(this.id==this.buyer1[i].id){
        this.buyer=this.buyer1[i];
      }
    }

    console.log(this.buyer);
  }

  

}
