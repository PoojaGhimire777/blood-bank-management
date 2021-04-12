package com.bloodbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.model.BloodRequest;
import com.bloodbank.model.Donor;
import com.bloodbank.model.User;
import com.bloodbank.service.BloodRequestService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/request")
public class BloodRequestController {
	private BloodRequestService bloodRequestService;

	@Autowired
	public BloodRequestController(BloodRequestService bloodRequestService) {
		this.bloodRequestService = bloodRequestService;
	}

	@PostMapping("/createRequest")
	public ResponseEntity<BloodRequest> createUser(@RequestBody BloodRequest bloodRequest) {
		BloodRequest requestCreated = bloodRequestService.generateRequest(bloodRequest);
		return ResponseEntity.status(HttpStatus.CREATED).body(requestCreated);
	}

	@GetMapping("/getAllRequest")
	public ResponseEntity<List<BloodRequest>> getAllStock() {
		List<BloodRequest> bloodRequest = bloodRequestService.findAllRequest();
		return ResponseEntity.status(HttpStatus.OK).body(bloodRequest);
	}

	@GetMapping("/getPendingRequests")
	public ResponseEntity<List<BloodRequest>> getPendingRequests() {
		List<BloodRequest> bloodRequest = bloodRequestService.findPendingRequest();
		return ResponseEntity.status(HttpStatus.OK).body(bloodRequest);
	}

	@PutMapping("/updateBloodRequest")
	public ResponseEntity<BloodRequest> updateBloodRequest(@RequestParam int id,
			@RequestBody BloodRequest bloodRequest) {
		BloodRequest updatedBloodRequest = bloodRequestService.updateBloodRequest(id, bloodRequest);
		return ResponseEntity.status(HttpStatus.OK).body(updatedBloodRequest);
	}
}
