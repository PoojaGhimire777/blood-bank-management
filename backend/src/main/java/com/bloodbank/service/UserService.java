package com.bloodbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.model.User;
import com.bloodbank.repository.UserRepository;

@Service
public class UserService{
	
	 private UserRepository userRepository;
	 
	 @Autowired
	  public UserService(UserRepository userRepository) {
	    this.userRepository = userRepository;
	  }

	public User createUser(User user) {
		// TODO Auto-generated method stub
		return userRepository.save(user);
	}

	
	public User findById(int id){ 
		  // TODO Auto-generated method
	   return userRepository.getUser(id); 
	 }

	public User findUserByUserName(String userName) {
		// TODO Auto-generated method stub
		return null;
	}
	 

}
