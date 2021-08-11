package com.auric.spring.auric.Service;

import java.util.List;
import java.util.Optional;

import com.auric.spring.auric.Repo.UserRepo;
import com.auric.spring.auric.entity.UserRegister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepo repo;

	@Override
	public UserRegister save(UserRegister o) {

		return repo.save(o);
	}

	@Override
	public List<UserRegister> findAll() {

		return repo.findAll();
	}

	@Override
	public Optional<UserRegister> findById(Long id) {

		return repo.findById(id);
	}

}
