package com.bloodbank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.bloodbank.model.BloodStock;
import com.bloodbank.model.Donor;

@Repository
public interface BloodStockRepository extends JpaRepository<BloodStock, Integer> {

	@Query("from  BloodStock where bloodgroup = :bloodgroup")
	Optional<BloodStock> findByBloodGroup(@Param("bloodgroup") String bloodgroup);

}
