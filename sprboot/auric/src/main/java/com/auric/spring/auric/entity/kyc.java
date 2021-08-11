package com.auric.spring.auric.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class kyc {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long id;



}
