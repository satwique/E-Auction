package com.Auction.Service;

import java.util.Set;

import com.Auction.entity.seller;

public interface SellerSevice {
	public seller addSeller(seller seller1);
	public Set<seller> getSellers();

}
