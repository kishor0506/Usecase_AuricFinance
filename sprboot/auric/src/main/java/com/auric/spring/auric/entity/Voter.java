package com.auric.spring.auric.entity;

import javax.persistence.Entity;

@Entity
public class Voter extends kyc {
    private Long voterId;

    public Long getVoterId() {
        return voterId;
    }

    public void setVoterId(Long voterId) {
        this.voterId = voterId;
    }
    
}
