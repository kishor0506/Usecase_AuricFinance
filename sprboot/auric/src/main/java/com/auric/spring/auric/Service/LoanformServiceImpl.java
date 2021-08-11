package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.Repo.LoanformRepo;
import com.auric.spring.auric.entity.Loanform;
import com.auric.spring.auric.entity.UserRegister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoanformServiceImpl implements LoanformService {


    @Autowired
	LoanformRepo repo;
    
	@Override
	public Loanform save(Loanform lf) {
		
		UserRegister user=new UserRegister();
		user.setrEmail("kishor@gmail.com");
		user.setrPassword("kishore@1234");
		user.setrUsername("kishore");
		lf.setUser(user);
		return  repo.save(lf);
	}

	@Override
	public List<Loanform> findAll() {
		
		return repo.findAll();
	}

	@Override
	public Optional<Loanform> findById(Long id) {
		
		UserRegister user=new UserRegister();
		user.setrEmail("kishor@gmail.com");
		return repo.findById(id);
	}
    
}
