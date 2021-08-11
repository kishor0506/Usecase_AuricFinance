package com.auric.spring.auric.entity;
import javax.persistence.*;

@Entity
public class UserRegister{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;

    public String rUsername;

    public String getrUsername() {
        return rUsername;
    }

    public void setrUsername(String rUsername) {
        this.rUsername = rUsername;
    }

    public String getrPassword() {
        return rPassword;
    }

    public void setrPassword(String rPassword) {
        this.rPassword = rPassword;
    }

    public String getrEmail() {
        return rEmail;
    }

    public void setrEmail(String rEmail) {
        this.rEmail = rEmail;
    }

    public String rPassword;

    public String rEmail;
}