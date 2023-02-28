package com.Auction.Service;

import java.util.Set;

import com.Auction.entity.buyer;
import com.Auction.entity.seller;

public interface buyerService {
	public buyer addBuyer(buyer buyer1);
	public buyer updateBuyer(int id,String email,int amount);
	public Set<buyer> showbids(int id);
	public Set<buyer> getBuyers();
	public buyer update(buyer buyer1);

}
