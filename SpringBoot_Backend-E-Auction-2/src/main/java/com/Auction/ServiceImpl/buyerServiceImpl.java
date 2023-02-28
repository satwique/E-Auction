package com.Auction.ServiceImpl;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Auction.Repository.buyerRepository;
import com.Auction.Service.buyerService;
import com.Auction.entity.buyer;
import com.Auction.entity.product;
import com.Auction.exception.userexception;

@Service
public class buyerServiceImpl implements buyerService{
	
	@Autowired
	private buyerRepository buyerrepo;

	@Autowired
	private com.Auction.Repository.productRepository productRepository;

	@Override
	public buyer addBuyer(buyer buyer1) {
		// TODO Auto-generated method stub
		
		return this.buyerrepo.save(buyer1);
		
		
	}
	
	

	@Override
	public buyer updateBuyer(int id,String email, int amount) {
		// TODO Auto-generated method stub
		buyer b=this.buyerrepo.findByEmail(email);
		if(id==b.getProduct().getId()) {
			b.setBidAmount(amount);
			this.buyerrepo.save(b);
			
		}
		else {
			throw new userexception("product id is wrong");
		}
		
		return b;
	}



	@Override
	public Set<buyer> showbids(int id) {
		// TODO Auto-generated method stub
		 List<buyer> s1=this.buyerrepo.findAll();
		 Set<buyer> s=new HashSet<>();
		 System.out.println(s1);
		 for(buyer b1:s1) {
			 if(b1.getProduct().getId()==id) {
				 s.add(b1);
				 System.out.println(b1);
			 }
			 
		 }
		 return s;
	}



	@Override
	public Set<buyer> getBuyers() {
		// TODO Auto-generated method stub
		return  new HashSet<>(this.buyerrepo.findAll());
	}



	@Override
	public buyer update(buyer buyer1) {
		// TODO Auto-generated method stub
		return this.buyerrepo.save(buyer1);
	}

	

	

}
