package com.bloodbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodbank.common.EmailUtility;
import com.bloodbank.common.ResourceNotFoundException;
import com.bloodbank.model.BloodRequest;
import com.bloodbank.repository.BloodRequestRepository;

@Service
public class BloodRequestService {

	private BloodRequestRepository bloodRequestRepository;

	@Autowired
	public BloodRequestService(BloodRequestRepository bloodRequestRepository) {
		this.bloodRequestRepository = bloodRequestRepository;
	}

	public List<BloodRequest> findAllRequest() {
		return bloodRequestRepository.findAll();
	}

	public BloodRequest generateRequest(BloodRequest bloodRequest) {
		bloodRequest.setStatus("PENDING");
		return bloodRequestRepository.save(bloodRequest);
	}

	public List<BloodRequest> findPendingRequest() {
		return bloodRequestRepository.findPendingRequest("PENDING");
	}

	public BloodRequest updateBloodRequest(int id, BloodRequest bloodRequest) {
		BloodRequest request = bloodRequestRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Donor does not exist with id :" + id));
		request.setStatus(bloodRequest.getStatus());

		EmailUtility e = new EmailUtility();
		e.send(request.getStatus(), request.getEmailId());

		return bloodRequestRepository.save(request);
	}

}
