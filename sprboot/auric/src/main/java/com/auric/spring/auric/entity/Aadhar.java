package com.auric.spring.auric.entity;

import javax.persistence.Entity;

@Entity
public class Aadhar extends kyc{

    private Long aadharNo;

    public Long getAadharNo() {
        return aadharNo;
    }

    public void setAadharNo(Long aadharNo) {
        this.aadharNo = aadharNo;
    }
    
}
