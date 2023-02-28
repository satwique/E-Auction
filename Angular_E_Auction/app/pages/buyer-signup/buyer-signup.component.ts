import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {

  constructor(private _product:ProductService,private _buyer:BuyerService,private snack:MatSnackBar,private router:Router) { }
  price:any;
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
    id:''
  }
  }
  product=[{
    id:'',
    prodcutName:'',
    startPrice:''
  }]

  ngOnInit(): void {

    this._product.products().subscribe((data:any)=>{
      this.product=data;
      console.log(this.product);
    },
    (error:any)=>{
      console.log(error);
    })


  }
  formSubmit(){
    if(this.buyer.email=='' || this.buyer.email==null){
      this.snack.open("UserName is required!!",'',{duration:3000});


    }
    for(let i=0;i<this.product.length;i++){
      if(this.product[i].id==this.buyer.product.id){
        this.price=this.product[i].startPrice
        
      }
    }
    if(this.price>this.buyer.bidAmount){
      Swal.fire('error','product price should be greater than or equal to'+this.price,'error');
    }
    else{
    this._buyer.addBuyer(this.buyer).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Successfully done','User id:'+data.id,'success');
          this.router.navigate(['buyer-login'])
      },
      (error:any)=>{
        console.log(error);
         this.snack.open("something went wrong",'',{duration:2000})
      }
    )
  }
}

}
