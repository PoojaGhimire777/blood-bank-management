package com.bloodbank.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bloodstock")
public class BloodStock {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	public BloodStock() {
		super();
	}

	public BloodStock(int id, String bloodgroup, int units) {
		super();
		this.id = id;
		this.bloodgroup = bloodgroup;
		this.units = units;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public int getUnits() {
		return units;
	}

	public void setUnits(int units) {
		this.units = units;
	}

	private String bloodgroup;
	private int units;

}
