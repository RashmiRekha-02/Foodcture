package com.example.FoodCture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.FoodCture.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer> {
	
	@Query(value = "SELECT e FROM User e WHERE e.email = :email AND e.password = :password")
    UserEntity findByEmailPass(@Param("email") String email, @Param("password") String password);

}
