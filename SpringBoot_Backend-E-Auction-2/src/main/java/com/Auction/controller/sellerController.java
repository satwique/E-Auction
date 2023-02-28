package com.Auction.controller;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Auction.ServiceImpl.ProductServiceImpl;
import com.Auction.ServiceImpl.SellerServiceImpl;
import com.Auction.entity.buyer;
import com.Auction.entity.product;
import com.Auction.entity.seller;



@RestController
@RequestMapping("/seller")
@CrossOrigin("*")
public class sellerController {

	
	@Autowired
	private SellerServiceImpl sellerService;
	@Autowired
	private ProductServiceImpl productServiec;
	@Autowired
	private com.Auction.ServiceImpl.buyerServiceImpl buyerServiceImpl;
	
	@PostMapping("/add-product")
	public ResponseEntity<?> addproduct(@RequestBody product product){
		ResponseEntity<String> p=this.productServiec.addProduct(product);
		return ResponseEntity.ok(p);
	}

	
	
	@PostMapping("/")
	public ResponseEntity<?> addseller(@RequestBody seller seller){
		seller s=this.sellerService.addSeller(seller);
		return ResponseEntity.ok(s);
	}
	@DeleteMapping("/delete/{id}")
	public void deleteProduct(@PathVariable("id") int pid) {
		this.productServiec.deleteProduct(pid);
	}
	
	@GetMapping("/show-bids/{id}")
	public  Set<buyer> getbuyer(@PathVariable("id") int id) {
		return this.buyerServiceImpl.showbids(id);
	}
	@GetMapping("/")
	public ResponseEntity<?> getSellers(){
		return ResponseEntity.ok(this.sellerService.getSellers());
	}
}
