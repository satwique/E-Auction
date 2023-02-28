package com.Auction.entity;


import java.util.LinkedHashSet;
import java.util.Set;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;


import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="seller")
public class seller {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@NotNull(message = " first Name may not be null")
	@Length(min = 5, max = 30)
	private String firstName;
	@Length(min = 3, max = 25)
	@NotNull(message = "last Name may not be null")
	private String lastName;
	
	private String address;
	private String city;
	private String state;
	private String pin;
	@NotNull(message = "Name may not be null")
	@Length(min = 10, max = 10)
	private Long phone;
	
	@Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}")
	@NotNull(message = "email may not be null")
	private String email;
	@OneToMany(mappedBy="category",cascade=jakarta.persistence.CascadeType.ALL)
	@JsonIgnore
	private Set<product> products =new LinkedHashSet<>();
	
	
	

	public Set<product> getProducts() {
		return products;
	}

	public void setProducts(Set<product> products) {
		this.products = products;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public seller() {
		super();
		// TODO Auto-generated constructor stub
	}

	public seller(int id, @NotNull(message = "Name may not be null") @Length(min = 5, max = 30) String firstName,
			@Length(min = 3, max = 25) @NotNull(message = "Name may not be null") String lastName, String address,
			String city, String state, String pin,
			@NotNull(message = "Name may not be null") @Length(min = 10, max = 10) Long phone,
			@Email(regexp = "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}") @NotNull(message = "Name may not be null") String email) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.phone = phone;
		this.email = email;
	}
	
	
	

}
