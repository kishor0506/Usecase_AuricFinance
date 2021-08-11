package com.auric.spring.auric.Service;

import java.util.Optional;
import java.util.List;


import com.auric.spring.auric.entity.Loanform;

public interface LoanformService {
    public Loanform save(Loanform lf);

    public List<Loanform> findAll();

    public Optional<Loanform> findById(Long id);
}
