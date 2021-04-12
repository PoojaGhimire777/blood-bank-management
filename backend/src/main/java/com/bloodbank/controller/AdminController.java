package com.bloodbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bloodbank.model.Donor;
import com.bloodbank.model.User;
import com.bloodbank.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/admin")

public class AdminController {
	AdminService adminService;

	@Autowired
	public AdminController(AdminService adminService) {
		this.adminService = adminService;
	}

	@GetMapping("/getAllDonor")
	public ResponseEntity<List<Donor>> getAllDonor() {
		List<Donor> donor = adminService.findAllDonors();
		return ResponseEntity.status(HttpStatus.OK).body(donor);
	}

	@PostMapping("/createDonor")
	public ResponseEntity<Donor> createDonor(@RequestBody Donor donor) {
		Donor donorCreated = adminService.createDonor(donor);
		return ResponseEntity.status(HttpStatus.CREATED).body(donorCreated);
	}

	@GetMapping("/getDonorById")
	public ResponseEntity<Donor> getDonorById(@RequestParam int id) {
		Donor donor = adminService.findById(id);

		return ResponseEntity.status(HttpStatus.OK).body(donor);
	}

	@PutMapping("/updateDonor")
	public ResponseEntity<Donor> updateDonor(@RequestParam int id, @RequestBody Donor donor) {
		Donor updatedDonor = adminService.updateDonor(id, donor);
		return ResponseEntity.status(HttpStatus.OK).body(updatedDonor);
	}

	@DeleteMapping("/deleteDonor")
	public ResponseEntity<Boolean> deleteDonor(@RequestParam int id) {
		Boolean response = adminService.deleteDonor(id);
		return ResponseEntity.status(HttpStatus.OK).body(response);

	}

	@GetMapping("/searchDonor")
	public ResponseEntity<List<Donor>> getDonor(@RequestParam(required = false) String location,
			@RequestParam(required = false) String bloodgroup) {
		List<Donor> donor = adminService.findDonors(location, bloodgroup);
		return ResponseEntity.status(HttpStatus.OK).body(donor);
	}

}
