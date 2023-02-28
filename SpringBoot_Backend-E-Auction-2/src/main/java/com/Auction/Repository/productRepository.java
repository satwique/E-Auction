package com.Auction.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Auction.entity.product;

public interface productRepository  extends JpaRepository<product,Integer>{
	
	public product findByProdcutName(String prodcutName);

}
