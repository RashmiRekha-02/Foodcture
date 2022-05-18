package com.example.FoodCture.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodCture.Repository.UserRepository;
import com.example.FoodCture.entity.UserEntity;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userrepo;
	
	//Registration Service
    public Map<String, String> registerUser(UserEntity newUser) {
    	List<UserEntity> users = userrepo.findAll();
    	
        HashMap<String, String> res = new HashMap<>();
        for (UserEntity user : users) {
            if (user.equals(newUser)) {
                res.put("email", newUser.getEmail());
                res.put("status", "0");
                res.put("msg", "User Already exists!");
                
                return res;
            }
        }
        res.put("email", newUser.getEmail());
        res.put("status", "1");
        res.put("msg", "User Registered Successfully!");
        System.out.println("Registered user: " + newUser.toString());
        userrepo.save(newUser);
        return res;
    }
    
  //Login Service
    public Map<String, String> loginUser(UserEntity user) {
    	UserEntity resUser = userrepo.findByEmailPass(user.getEmail(),user.getPassword());
    	HashMap<String, String> res = new HashMap<>();
    	if(resUser == null) {
            res.put("email", user.getEmail());
            res.put("status", "0");
            res.put("msg", "User Log In Failed!");
            
            return res;
    	}
    	
        res.put("email", resUser.getEmail());
        res.put("status", "1");
        res.put("msg", "User Logged In Successfully!");
        
        userrepo.save(resUser);
    	System.out.println("Login user: " + resUser);
    	return res;
    }
    

}
