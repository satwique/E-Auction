import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {

  constructor(private _seller:SellerService,private snack:MatSnackBar,private router:Router) { }

  public seller={
    firstName:'',
	 lastName:'',
  address:'',
	 city:'',
	 state:'',
	pin:'',
	 phone:'',
	email:''
  }

  ngOnInit(): void {
  }
  formSubmit(){
    
    if(this.seller.email=='' || this.seller.email==null){
      this.snack.open("UserName is required!!",'',{duration:3000});
    }
      this._seller.addSeller(this.seller).subscribe(
        (data:any)=>{
          console.log(data);
          Swal.fire('Successfully done','User id:'+data.id,'success');
          this.router.navigate(['seller-login'])

        },
        (error)=>{
          console.log(error);
         this.snack.open("something went wrong",'',{duration:2000})

        }
      )
  }

}
