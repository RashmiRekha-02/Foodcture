package com.example.FoodCture.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.FoodCture.Service.UserService;
import com.example.FoodCture.entity.UserEntity;

@RestController
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	
	  @PostMapping("/registerUser")
	    public Map<String, String> addUser(@RequestBody UserEntity User) {
	        return userservice.registerUser(User);
	    }
	    
	    @PostMapping("/loginUser")
	    public Map<String, String> loginUser(@RequestBody UserEntity User) {
	        return userservice.loginUser(User);
	    }

}
