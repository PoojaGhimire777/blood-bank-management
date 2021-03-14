package com.plantplaces.plantplaces;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long uid;
	
	@Column(nullable = false, length= 25)
    private String fname;
	 
	@Column(nullable = false, length= 25)
    private String lname;
    
	@Column(nullable = false, unique = true, length= 50)
    private String email;
	
	@Column(nullable = false, length= 64)
	private String password;
	
	@Column(nullable = false, length= 2)
	private int age;
	
	@Column(nullable = false, length= 40)
	private String add;
	
	@Column(nullable = false, length= 12)
	private String MNo;
	
	@Column(nullable = false, length= 6)
	private String gender;
	
	@Column(nullable = false, length= 10)
	private String date;
	
	@Column(nullable = false, length= 3)
	private String bloodgroup;
	
	public long getUid() {
		return uid;
	}

	public void setUid(long uid) {
		this.uid = uid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAdd() {
		return add;
	}

	public void setAdd(String add) {
		this.add = add;
	}

	public String getMNo() {
		return MNo;
	}

	public void setMNo(String mNo) {
		MNo = mNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}
}
