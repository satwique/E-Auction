package com.Auction.Service;

import java.util.Optional;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.Auction.entity.product;

public interface ProductService {
	public ResponseEntity<String> addProduct(product product1) throws Exception;
	public void deleteProduct(int productId);
	public Optional<product> getProduct(int id);
	public Set<product> products();

}
