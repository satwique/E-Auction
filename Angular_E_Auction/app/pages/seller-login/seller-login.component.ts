import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  constructor(private _seller:SellerService,private snack:MatSnackBar,private router:Router) { }

  public seller={
    
	 phone:'',
	email:''
  }
  a1:any;
  id:any;
  id1=0;

  ngOnInit(): void {
    this._seller.Sellers().subscribe(
      (data:any)=>{
        console.log(data);
        this.a1=data;

      },
      (error:any)=>{
        console.log(error);
      }
    )
    
  }
  formSubmit(data:any){
    console.log(data);
    console.log(this.a1);
    
    for(let i=0;i<this.a1.length;i++){
      if(this.a1[i].email==data.email && this.a1[i].phone==data.phone){
        this.id=this.a1[i].id;
        this.id1++;
        this.router.navigate(["seller-page",this.id])
        
      }
    }
    if(this.id1==0){
      this.snack.open("something went wrong",'',{duration:2000})
    }
    else{
      Swal.fire('Successfully login','','success');
      this.router.navigate(["seller-page",this.id])
    }

  }
  

}
