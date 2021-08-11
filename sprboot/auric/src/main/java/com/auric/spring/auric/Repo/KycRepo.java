package com.auric.spring.auric.Repo;

import com.auric.spring.auric.entity.kyc;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KycRepo extends JpaRepository <kyc,Long> {
    
}
