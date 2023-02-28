package com.Auction.ServiceImpl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Auction.Service.SellerSevice;
import com.Auction.entity.seller;

@Service
public class SellerServiceImpl implements SellerSevice {
	
	@Autowired
	private com.Auction.Repository.sellerRepository sellerRepository;

	@Override
	public seller addSeller(seller seller1) {
		// TODO Auto-generated method stub
		
		return this.sellerRepository.save(seller1);
	}

	@Override
	public Set<seller> getSellers() {
		// TODO Auto-generated method stub
		return  new HashSet<>(this.sellerRepository.findAll());
	}
	

}
