package com.Auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Auction.entity.buyer;
import com.Auction.entity.product;


public interface buyerRepository  extends JpaRepository<buyer,Integer>{
	
	public buyer findByEmail(String Email);
	public buyer findByProduct(product product);

}
