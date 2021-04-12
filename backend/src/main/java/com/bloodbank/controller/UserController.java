package com.bloodbank.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.common.ResourceNotFoundException;
import com.bloodbank.model.User;
import com.bloodbank.repository.UserRepository;
import com.bloodbank.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/user")
public class UserController {
	UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/createUser")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User userCreated = userService.createUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);
	}

	@GetMapping("/getUserById")
	public ResponseEntity<User> getUserById(@RequestParam int id) {
		User user = userService.findById(id);

		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@GetMapping("/authenticate")
	public ResponseEntity<User> authenticateUser(@RequestParam String username, @RequestParam String password,
			@RequestParam String role) {
		User user = userService.validateUser(username, password, role);

		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

}
