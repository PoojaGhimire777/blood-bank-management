package com.bloodbank.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
    @Column(name = "username")
	private String userName;
	private String role;//make this enum
	private String password;
   // private boolean active;

	public String getUserName() {
		return userName;
	}
	public void setUsername(String userName) {
		this.userName = userName;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	/*
	 * public boolean isActive() { return active; } public void setActive(boolean
	 * active) { this.active = active; }
	 */
}
