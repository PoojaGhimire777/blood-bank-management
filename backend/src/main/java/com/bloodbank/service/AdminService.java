package com.bloodbank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.bloodbank.common.ResourceNotFoundException;
import com.bloodbank.model.Donor;
import com.bloodbank.model.User;
import com.bloodbank.repository.AdminRepository;

@Service
public class AdminService {
	private static final Boolean TRUE = null;
	private AdminRepository adminRepository;

	@Autowired
	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public List<Donor> findAllDonors() {
		return adminRepository.findAll();

	}

	public Donor createDonor(Donor donor) {
		return adminRepository.save(donor);
	}

	public Donor updateDonor(int id, Donor donor) {
		Donor donor1 = adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Donor does not exist with id :" + id));
		donor1.setFirstName(donor.getFirstName());
		donor1.setLastName(donor.getLastName());
		donor1.setDateOfBirth(donor.getDateOfBirth());
		donor1.setGender(donor.getGender());
		donor1.setBloodGroup(donor.getBloodGroup());
		donor1.setEmailId(donor.getEmailId());
		donor1.setContactNumber(donor.getContactNumber());
		donor1.setAddress(donor.getAddress());
		donor1.setCity(donor.getCity());
		donor1.setState(donor.getState());
		donor1.setPincode(donor.getPincode());
		return adminRepository.save(donor1);

	}

	public Boolean deleteDonor(int id) {
		Donor donor1 = adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Donor does not exist with id :" + id));

		adminRepository.delete(donor1);
		Boolean response = TRUE;
		return response;

	}

	public List<Donor> findDonors(String location, String bloodgroup) {
		if (location == null & bloodgroup != null) {
			return adminRepository.findDonorByBloodgroup(bloodgroup);
		} else if (location != null & bloodgroup == null) {
			return adminRepository.findDonorByLocation(location);
		}

		return adminRepository.findDonorByBloodgroupandLocation(location, bloodgroup);

	}

	public Donor findById(int id) {
		return adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Donor" + " does not exist with id :" + id));
	}

}
