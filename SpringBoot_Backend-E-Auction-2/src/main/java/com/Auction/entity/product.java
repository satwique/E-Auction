package com.Auction.entity;


import java.util.LinkedHashSet;
import java.util.Set;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@NotNull(message = " product may not be null")
	@Length(min = 5, max = 30)
	private String prodcutName;
	private String shortDescription;
	private String DetailedDescription;
	private String category;
	private String startPrice;
	private String bidEndDate;
	@jakarta.persistence.ManyToOne(fetch=jakarta.persistence.FetchType.EAGER)
	private seller seller1;
	
	@OneToOne
	
	private buyer buyer;
	
	
	
	
	public buyer getBuyer() {
		return buyer;
	}
	public void setBuyer(buyer buyer) {
		this.buyer = buyer;
	}
	public seller getSeller1() {
		return seller1;
	}
	public void setSeller1(seller seller1) {
		this.seller1 = seller1;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProdcutName() {
		return prodcutName;
	}
	public void setProdcutName(String prodcutName) {
		this.prodcutName = prodcutName;
	}
	public String getShortDescription() {
		return shortDescription;
	}
	public void setShortDescription(String shortDescription) {
		this.shortDescription = shortDescription;
	}
	public String getDetailedDescription() {
		return DetailedDescription;
	}
	public void setDetailedDescription(String detailedDescription) {
		DetailedDescription = detailedDescription;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getStartPrice() {
		return startPrice;
	}
	public void setStartPrice(String startPrice) {
		this.startPrice = startPrice;
	}
	public String getBidEndDate() {
		return bidEndDate;
	}
	public void setBidEndDate(String bidEndDate) {
		this.bidEndDate = bidEndDate;
	}

	public product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public product(int id, @NotNull(message = " product may not be null") @Length(min = 5, max = 30) String prodcutName,
			String shortDescription, String detailedDescription, String category, String startPrice, String bidEndDate,
			seller seller1, com.Auction.entity.buyer buyer) {
		super();
		this.id = id;
		this.prodcutName = prodcutName;
		this.shortDescription = shortDescription;
		DetailedDescription = detailedDescription;
		this.category = category;
		this.startPrice = startPrice;
		this.bidEndDate = bidEndDate;
		this.seller1 = seller1;
		this.buyer = buyer;
	}
	
	
	
	
	

}
