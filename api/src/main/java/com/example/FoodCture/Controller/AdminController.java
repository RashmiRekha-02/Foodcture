package com.example.FoodCture.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodCture.Service.AdminService;
import com.example.FoodCture.entity.AdminEntity;

@RestController
public class AdminController {
	
	@Autowired
	private AdminService adminservice;
	
	
	 @PostMapping("/loginAdmin")
	    public Map<String, String> loginUser(@RequestBody AdminEntity admin) {
	        return adminservice.loginAdmin(admin);
	    }
	 
	 @PutMapping("/updateAdmin")
	 public AdminEntity updateAdmin(@RequestBody AdminEntity admin) {
	      return adminservice.updateAdmin(admin);
	  }

	  @DeleteMapping("/deleteAdmin/{id}")
	  public String deleteAdmin(@PathVariable int id) {
		  return adminservice.deleteAdmin(id);
	  }

}
