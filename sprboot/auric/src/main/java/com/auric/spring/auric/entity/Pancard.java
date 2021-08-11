package com.auric.spring.auric.entity;

import javax.persistence.Entity;

@Entity
public class Pancard extends kyc {
    
  private Long panNumber;

public Long getPanNumber() {
    return panNumber;
}

public void setPanNumber(Long panNumber) {
    this.panNumber = panNumber;
}
  

}
