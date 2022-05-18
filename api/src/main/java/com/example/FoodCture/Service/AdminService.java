package com.example.FoodCture.Service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FoodCture.Repository.AdminRepository;
import com.example.FoodCture.entity.AdminEntity;

@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminrepo;
	
	//Login Service
    public Map<String, String> loginAdmin(AdminEntity admin) {
    	AdminEntity readmin = adminrepo.findByEmailPass(admin.getEmail(),admin.getPassword());
    	HashMap<String, String> res = new HashMap<>();
    	if(readmin == null) {
            res.put("email", admin.getEmail());
            res.put("status", "0");
            res.put("msg", "Admin Log In Failed!");
            
            return res;
    	}
    	
        res.put("email", readmin.getEmail());
        res.put("status", "1");
        res.put("msg", "Admin Logged In Successfully!");
        readmin.setLoggedIn("true");
        adminrepo.save(readmin);
    	System.out.println("Login user: " + readmin);
    	//System.out.println("Login user: " + resUser.toString());
    	return res;
    }
    
 //delete admin
    
    public String deleteAdmin(int id) {
    	adminrepo.deleteById(id);
        return "Admin removed " + id;
    }
    
    //update admin
    public AdminEntity updateAdmin(AdminEntity admin) {
        AdminEntity existingadmin = adminrepo.findById(admin.getId()).orElse(null);
        existingadmin.setName(admin.getName());
        existingadmin.setEmail(admin.getEmail());
        existingadmin.setPassword(admin.getPassword());
        existingadmin.setPhoneno(admin.getPhoneno());
        return adminrepo.save(existingadmin);
    }
	

	
}
