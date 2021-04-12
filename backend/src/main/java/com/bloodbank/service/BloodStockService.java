package com.bloodbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.common.ResourceNotFoundException;
import com.bloodbank.model.BloodStock;
import com.bloodbank.model.Donor;
import com.bloodbank.repository.AdminRepository;
import com.bloodbank.repository.BloodStockRepository;

@Service
public class BloodStockService {
	private BloodStockRepository bloodStockRepository;

	@Autowired
	public BloodStockService(BloodStockRepository bloodStockRepository) {
		this.bloodStockRepository = bloodStockRepository;
	}

	public List<BloodStock> findAllStocks() {
		return bloodStockRepository.findAll();
	}

	public BloodStock increaseStock(int units, String bloodgroup) {
		BloodStock stock = bloodStockRepository.findByBloodGroup(bloodgroup)
				.orElseThrow(() -> new ResourceNotFoundException("Blood does not exist"));
		stock.setUnits(stock.getUnits() + units);
		return bloodStockRepository.save(stock);
	}

	public BloodStock decreaseStock(int units, String bloodgroup) {
		BloodStock stock = bloodStockRepository.findByBloodGroup(bloodgroup)
				.orElseThrow(() -> new ResourceNotFoundException("Blood does not exist"));
		stock.setUnits(stock.getUnits() - units);
		return bloodStockRepository.save(stock);
	}

}
