import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-seller-sidebar',
  templateUrl: './seller-sidebar.component.html',
  styleUrls: ['./seller-sidebar.component.css']
})
export class SellerSidebarComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
id:any;

 
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  }
  add(){
    this.router.navigate(['/add-product',this.id]);

  }

}
