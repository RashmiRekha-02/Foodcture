package com.example.FoodCture.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class AdminEntity {
	
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String email;
	private String password;
	private String phoneno;
	private String loggedIn = "false";
	
	
	public AdminEntity() {
		
	}


	public AdminEntity(String email, String password) {
		
		this.email = email;
		this.password = password;
	}


	public AdminEntity(String name, String email, String password, String phoneno, String loggedIn) {
		
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneno = phoneno;
		this.loggedIn = loggedIn;
	}
	
	


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPhoneno() {
		return phoneno;
	}


	public void setPhoneno(String phoneno) {
		this.phoneno = phoneno;
	}


	public String getLoggedIn() {
		return loggedIn;
	}


	public void setLoggedIn(String loggedIn) {
		this.loggedIn = loggedIn;
	}
	
	
	
	
	
	

}
