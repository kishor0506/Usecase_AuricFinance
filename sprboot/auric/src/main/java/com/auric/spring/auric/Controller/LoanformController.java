package com.auric.spring.auric.Controller;
import java.util.Optional;

import com.auric.spring.auric.Service.LoanformService;

import com.auric.spring.auric.entity.Loanform;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/loan")
public class LoanformController {
    
    @Autowired
    LoanformService service;

    @PostMapping(value="")
    public ResponseEntity<Loanform> saveloanform(@RequestBody Loanform loandet) {
        
        Loanform loan = service.save(loandet);
        return new ResponseEntity<Loanform>(loan,HttpStatus.OK);
    }
    
    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Optional<Loanform>> getData(@PathVariable Long id)
    {
        Optional<Loanform> loan = service.findById(id);
        return new ResponseEntity<Optional<Loanform> >(loan,HttpStatus.OK);
        
    }
}


    

