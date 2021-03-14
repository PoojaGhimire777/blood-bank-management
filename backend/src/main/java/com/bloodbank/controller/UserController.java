package com.bloodbank.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.model.User;
import com.bloodbank.service.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {
	UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping("/create")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User userCreated = userService.createUser(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);
	}
	
    @GetMapping("/getUser")
    public ResponseEntity<User> getUserById(@RequestParam int id) {
    	User user = userService.findById(id);
	    return ResponseEntity.status(HttpStatus.OK).body(user); 
	 }
 
    @GetMapping("/authenticate")
    public ResponseEntity<User> authenticateUser(@RequestParam String username,@RequestParam String password,@RequestParam String role) {
    	User user = userService.findById(id);
	    return ResponseEntity.status(HttpStatus.OK).body(user); 
	 }
	  
	 
	/*
	 * @GetMapping public ResponseEntity<List<User>> getEvents(@RequestParam String
	 * user, LocalDate startDate, LocalDate endDate) { List<User> event =
	 * userService.getEvents(user, startDate, endDate); return
	 * ResponseEntity.status(HttpStatus.OK).body(event); }
	 */

}
