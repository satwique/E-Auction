package com.Auction.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Auction.ServiceImpl.ProductServiceImpl;
import com.Auction.ServiceImpl.buyerServiceImpl;
import com.Auction.entity.buyer;


@RestController
@RequestMapping("/buyer")
@CrossOrigin("*")
public class buyerController {
	
	@Autowired
	private buyerServiceImpl bs;
	@Autowired
	private ProductServiceImpl productServiec;
	
	@PostMapping("/place-bid")
	public ResponseEntity<?> addbuyer(@RequestBody buyer buyer){
		buyer b=this.bs.addBuyer(buyer);
		return ResponseEntity.ok(b);
		
		
	}
	
	@PutMapping("/update-bid/{product_id}/{email}/{newBidAmount}")
	private buyer updateBuyer(@PathVariable("product_id") int id,@PathVariable("email") String email,@PathVariable("newBidAmount") int newBidAmount){
		return this.bs.updateBuyer( id,email, newBidAmount);
	}
	@GetMapping("/")
	public ResponseEntity<?> getBuyers(){
		return ResponseEntity.ok(this.bs.getBuyers());
	}
	@PostMapping("/update-bid")
	public buyer updateCategory(@RequestBody buyer buyer1) {
		return this.bs.update(buyer1);
	}

}
