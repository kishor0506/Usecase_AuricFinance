package com.auric.spring.auric.Controller;
import com.auric.spring.auric.Service.UserService;
import com.auric.spring.auric.entity.UserRegister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/user")
public class UserController {
    
    @Autowired
    UserService service;

    @PostMapping(value="")
    public ResponseEntity<UserRegister> saveUser(@RequestBody UserRegister u) {
        
        UserRegister user = service.save(u);
        return new ResponseEntity<UserRegister>(user,HttpStatus.OK);
    }
    
}
