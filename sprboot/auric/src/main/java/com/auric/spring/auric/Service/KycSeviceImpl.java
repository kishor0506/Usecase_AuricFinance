package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.Repo.KycRepo;
import com.auric.spring.auric.entity.kyc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class KycSeviceImpl  implements KycService{

   @Autowired 
   KycRepo repo;
    @Override
    public kyc save(kyc ky) {
        
        return repo.save(ky);
    }

    @Override
    public List<kyc> findAll() {
        
        return repo.findAll();
    }

    @Override
    public Optional<kyc> findById(Long id) {
        
        return repo.findById(id);
    }
    
}
