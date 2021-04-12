package com.bloodbank.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bloodbank.model.Donor;

@Repository
public interface AdminRepository extends JpaRepository<Donor, Integer> {

	@Query("from  Donor where id = :donorId")
	Donor getDonor(@Param("donorId") int id);

	@Query("from  Donor where blood_group = :bloodgroup")
	List<Donor> findDonorByBloodgroup(@Param("bloodgroup") String bloodgroup);

	@Query("from  Donor where city = :loc")
	List<Donor> findDonorByLocation(@Param("loc") String location);

	@Query(value = " FROM   Donor  where city = :city AND blood_group = :bloodgroup")
	List<Donor> findDonorByBloodgroupandLocation(@Param("city") String city, @Param("bloodgroup") String bloodgroup);

}
