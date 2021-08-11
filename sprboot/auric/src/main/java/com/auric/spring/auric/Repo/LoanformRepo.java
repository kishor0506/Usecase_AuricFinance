package com.auric.spring.auric.Repo;

import com.auric.spring.auric.entity.Loanform;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanformRepo extends JpaRepository<Loanform,Long>{
}
