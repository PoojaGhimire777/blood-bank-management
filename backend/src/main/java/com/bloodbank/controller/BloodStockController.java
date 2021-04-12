package com.bloodbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bloodbank.model.BloodStock;
import com.bloodbank.model.Donor;
import com.bloodbank.service.BloodStockService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/stock")
public class BloodStockController {
	private BloodStockService bloodStockservice;

	@Autowired
	public BloodStockController(BloodStockService bloodStockservice) {
		this.bloodStockservice = bloodStockservice;
	}

	@GetMapping("/getAllStock")
	public ResponseEntity<List<BloodStock>> getAllStock() {
		List<BloodStock> bloodStock = bloodStockservice.findAllStocks();
		return ResponseEntity.status(HttpStatus.OK).body(bloodStock);
	}

	@PutMapping("/increaseStock")
	public ResponseEntity<BloodStock> increaseStock(@RequestParam int units, @RequestParam String bloodgroup) {
		BloodStock updatedbloodStock = bloodStockservice.increaseStock(units, bloodgroup);
		return ResponseEntity.status(HttpStatus.OK).body(updatedbloodStock);
	}

	@PutMapping("/decreaseStock")
	public ResponseEntity<BloodStock> decreaseStock(@RequestParam int units, @RequestParam String bloodgroup) {
		BloodStock updatedbloodStock = bloodStockservice.decreaseStock(units, bloodgroup);
		return ResponseEntity.status(HttpStatus.OK).body(updatedbloodStock);
	}

}
