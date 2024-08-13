package com.ofss.main.service;

import com.ofss.main.domain.AuthResult;
import com.ofss.main.domain.Login;

public interface LoginService 
{
    public Login addNewLogin(Login login); 
    
    public AuthResult loginIntoAccount(String user_name, String user_password); 
}
