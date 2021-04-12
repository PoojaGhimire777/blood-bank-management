package com.bloodbank.repository;

import org.springframework.stereotype.Repository;

import com.bloodbank.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("from  User where username = :name AND password = :pwd AND role = :r")
	Optional<User> validateUser(@Param("name") String username, @Param("pwd") String password, @Param("r") String role);

}
