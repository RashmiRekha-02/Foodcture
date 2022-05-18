package com.example.FoodCture.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserEntity {
	
	
	@Id
	@GeneratedValue
	private int id;
	private String email;
	private String name;
	private String password;
	private String organisation;
	
	
	public UserEntity() {
	
	}


	public UserEntity(String email, String password) {
		
		this.email = email;
		this.password = password;
	}


	public UserEntity(String email, String name, String password, String organisation) {
		
		this.email = email;
		this.name = name;
		this.password = password;
		this.organisation = organisation;
	}


	
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getOrganisation() {
		return organisation;
	}


	public void setOrganisation(String organisation) {
		this.organisation = organisation;
	}
	
	
	
	
	
	
	
	
	
	

}
