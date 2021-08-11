package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.entity.kyc;

public interface KycService {
    public kyc save(kyc ky);

    public List<kyc> findAll();

    public Optional<kyc> findById(Long id); 
}
