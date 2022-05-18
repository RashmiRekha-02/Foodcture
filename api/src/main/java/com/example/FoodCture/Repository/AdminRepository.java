package com.example.FoodCture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.FoodCture.entity.AdminEntity;

public interface AdminRepository extends JpaRepository<AdminEntity, Integer> {
	
	@Query(value = "SELECT e FROM Admin e WHERE e.email = :email AND e.password = :password")
    AdminEntity findByEmailPass(@Param("email") String email, @Param("password") String password);

}
