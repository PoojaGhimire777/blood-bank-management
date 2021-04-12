package com.bloodbank.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bloodrequest")
public class BloodRequest {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	public int getId() {
		return id;
	}

	public BloodRequest() {
		super();
	}

	public BloodRequest(int id, String bloodGroup, String address, String name, String contactNumber, String emailId) {
		super();
		this.id = id;
		this.bloodGroup = bloodGroup;
		this.address = address;
		this.name = name;
		this.contactNumber = contactNumber;
		this.emailId = emailId;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	private String bloodGroup;
	private String address;
	private String name;
	private String contactNumber;
	private String status;
	private String emailId;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
