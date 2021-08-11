package com.auric.spring.auric.Service;

import com.auric.spring.auric.entity.UserRegister;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public UserRegister save(UserRegister o);

    public List<UserRegister> findAll();

    public Optional<UserRegister> findById(Long id);
}
