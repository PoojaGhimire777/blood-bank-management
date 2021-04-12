package com.bloodbank.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.bloodbank.model.BloodRequest;

@Repository
public interface BloodRequestRepository extends JpaRepository<BloodRequest, Integer> {
	@Query("from  BloodRequest where status = :status")
	List<BloodRequest> findPendingRequest(@Param("status") String status);

}
