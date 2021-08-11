package com.auric.spring.auric.Controller;


import java.util.Optional;

import com.auric.spring.auric.Service.KycService;
import com.auric.spring.auric.entity.kyc;

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
@RequestMapping("api/kyc")
public class KycController {
    
    @Autowired
    KycService service;

    @PostMapping(value="")
    public ResponseEntity<kyc> savekyc(@RequestBody kyc kycdoc) {
        
        kyc kycver = service.save(kycdoc);
        return new ResponseEntity<kyc>(kycver,HttpStatus.OK);
    }
    
    @GetMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE )
    public ResponseEntity<Optional<kyc>> getData(@PathVariable Long id)
    {
        Optional<kyc> Kycver = service.findById(id);
        return new ResponseEntity<Optional<kyc> >(Kycver,HttpStatus.OK);
        
    }

    
}
