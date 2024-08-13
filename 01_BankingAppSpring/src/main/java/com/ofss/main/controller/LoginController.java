package com.ofss.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.AuthResult;
import com.ofss.main.domain.Login;
import com.ofss.main.service.LoginService;

@CrossOrigin
@RequestMapping("bankapi")
@RestController
public class LoginController {
	
	 
	 @Autowired
	 private LoginService loginService ; 
	
     @GetMapping("login")
     public String logintest()
     {
    	 return "Login Api chal rha h" ; 
     }
     
     @PostMapping("login")
     public AuthResult loginintoaccount(@RequestBody Login login)
     {
    	 AuthResult authResult = loginService.loginIntoAccount(login.getUserName(), login.getUserPassword());
    	 return authResult ; 
     }
}
