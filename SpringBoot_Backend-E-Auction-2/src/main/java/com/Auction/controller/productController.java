package com.Auction.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Auction.ServiceImpl.ProductServiceImpl;
import com.Auction.ServiceImpl.SellerServiceImpl;
import com.Auction.entity.seller;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins="http://localhost:4200")
public class productController {
	
	@Autowired
	private ProductServiceImpl ps;
	@GetMapping("/")
	public ResponseEntity<?> getProducts(){
		return ResponseEntity.ok(this.ps.products());
	
	
}
}
