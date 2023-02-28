import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';

@Component({
  selector: 'app-buyer-page1',
  templateUrl: './buyer-page1.component.html',
  styleUrls: ['./buyer-page1.component.css']
})
export class BuyerPage1Component implements OnInit {

  id:any;
  id1:any;
  buyer={
    id:'',
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
  constructor(private _buyer:BuyerService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this._buyer.buyers().subscribe((data:any)=>{
      this.buyer1=data;
      console.log(this.buyer1.length);
      this.id1=this.buyer1.length;
      for(let i=0;i<this.id1;i++){
        
        if(this.id==this.buyer1[i].id){
          
          this.buyer=this.buyer1[i];
          console.log(this.buyer);
          
        }
      }
    },
    (error:any)=>{
      console.log(error);
    })

   

   
    


    
  }
  submit(data:any){
    console.log(data);
    this.router.navigate(['buyer-update',data])

  }

 

  

}

