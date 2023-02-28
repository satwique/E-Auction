import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _product:ProductService) { }
id:any;
id1=0;
product={
  prodcutName:'',
	 shortDescription:'',
	 DetailedDescription:'',
	 category:'',
	 startPrice:'',
	 bidEndDate:'',

	 seller1:{
    id:''
   }
}
s1:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.product.seller1.id=this.id;
    
  this._product.products().subscribe((data:any)=>{
    console.log(data);
    this.s1=data
    console.log(this.s1)
  },
  (error:any)=>{
    console.log(error)
  })
    console.log(this.s1);
    
  }
  addproduct(){
    for(let i=0;i<this.s1.length;i++){
      console.log(this.s1[i].prodcutName)
      if(this.product.prodcutName==this.s1[i].prodcutName){
        this.id1++;

      }
    }
    console.log(this.id1)
    if(this.id1==0){

    if(this.product.category=='painting'||this.product.category=='sculptor'||this.product.category=='ornaments'){
    this._product.addproduct(this.product).subscribe(
      (data:any)=>{
        console.log(data)
        Swal.fire('Success','Product Added','success');
        this.product.prodcutName='',
        this.product.shortDescription='',
        this.product.DetailedDescription='',
        this.product.category='',
        this.product.startPrice='',
        this.product.bidEndDate=''

      },
      (error)=>{
        Swal.fire('Error!!','Error while adding Product','error');
        console.log(error);
  
      })
    }
    else{
      Swal.fire('Error!!','category should be from painting,sculptor or ornaments','error');
      
    }
  }
  else{
    Swal.fire('Error!!','product name already present','error');
  }


  }

}
