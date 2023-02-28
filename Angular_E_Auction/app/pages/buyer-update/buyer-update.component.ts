import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyer-update',
  templateUrl: './buyer-update.component.html',
  styleUrls: ['./buyer-update.component.css']
})
export class BuyerUpdateComponent implements OnInit {

  id:any;
  id1:any;
  email:any
  pid:any;
  id2:any;
  amount:any;
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
         /* console.log(this.buyer);
          this.email=this.buyer1[i].email;
          this.pid=this.buyer1[i].product.id;
          console.log(this.email);
          console.log(this.pid);*/

          
        }
      }
    },
    (error:any)=>{
      console.log(error);
    })
  }

  submit(data:any){
    console.log(data)
    this.buyer.bidAmount=data;
    console.log(this.buyer.bidAmount);
    console.log(this.buyer)
    this._buyer.updatebid(this.buyer).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Successfully updated bid amount','','success');
        this.router.navigate(['buyer-page1',this.id])
      },
      (error:any)=>{
        Swal.fire('error updating bid amount','','error');
      }
    )
    
    
  }

}
