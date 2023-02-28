import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-show-bid',
  templateUrl: './show-bid.component.html',
  styleUrls: ['./show-bid.component.css']
})
export class ShowBidComponent implements OnInit {

  constructor(private _product:ProductService,private snack:MatSnackBar,private router:Router,private _seller:SellerService) { }

  product=[{
    id:'',
    prodcutName:'',
    startPrice:''
  }]
  product1={
    id:'',
    prodcutName:'',
    startPrice:''
  }
  id1:any;

  ngOnInit(): void {
    this._product.products().subscribe((data:any)=>{
      this.product=data;
      console.log(this.product);
    },
    (error:any)=>{
      console.log(error);
    })
  }

  submit(data:any){
    
    this.id1=data.id;
    console.log(this.id1);
    this.router.navigate(['search',this.id1])


  }

}
