package com.auric.spring.auric.Repo;

import com.auric.spring.auric.entity.UserRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface Login extends JpaRepository<UserRegister,Long>{

   @Query("select u from UserRegister u where u.rEmail= :email")
   public UserRegister getEmailAndPass(String email);
}
