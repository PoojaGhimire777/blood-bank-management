package com.bloodbank.service;

import java.util.Optional;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bloodbank.common.ResourceNotFoundException;
import com.bloodbank.common.UnauthorizedException;
import com.bloodbank.model.User;
import com.bloodbank.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;

	@Autowired
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Transactional(readOnly = true)
	public User findById(int id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User does not exist with id :" + id));
	}

	public User validateUser(String username, String password, String role) {
		User user = userRepository.validateUser(username, password, role)
				.orElseThrow(() -> new UnauthorizedException("User does not exist "));

		return user;
	}

}
