package com.Auction.ServiceImpl;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Auction.Service.ProductService;
import com.Auction.entity.product;
import com.Auction.exception.userexception;
@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private com.Auction.Repository.productRepository productRepository;
	
	
	
	
	@Override
	public ResponseEntity<String> addProduct(product product1) throws RuntimeException {
		// TODO Auto-generated method stub
		String s=product1.getCategory();
		String s2="painting";
		String s3="sculptor";
		String s4="ornaments";
		product s1=this.productRepository.findByProdcutName(product1.getProdcutName());
		System.out.println(s);
		System.out.println(s1);
		if(this.productRepository.findByProdcutName(product1.getProdcutName())==null) {
			if(s.equals(s2)||s.equals(s3)||s.equals(s4)) {
			 this.productRepository.save(product1);
			 return new ResponseEntity("product saved successfully",HttpStatus.OK);
			}
			 return new ResponseEntity("product category is not from above",HttpStatus.BAD_REQUEST);
			
		}
		else {
			return new ResponseEntity("product already present",HttpStatus.BAD_REQUEST);
		}
		
	}




	@Override
	public void deleteProduct(int productId) {
		// TODO Auto-generated method stub
		this.productRepository.deleteById(productId);
		
	}




	@Override
	public Optional<product> getProduct(int id) {
		// TODO Auto-generated method stub
		Optional<product> d=this.productRepository.findById(id);
		return d;
	}




	@Override
	public Set<product> products() {
		// TODO Auto-generated method stub
		return  new HashSet<>(this.productRepository.findAll());
	}

}
