package com.ofss.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.AuthResult;
import com.ofss.main.domain.Login;
import com.ofss.main.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginRepository loginRepository ; 
	
	@Override
	public Login addNewLogin(Login login) {
		return loginRepository.save(login); 
	}

	@Override
	public AuthResult loginIntoAccount(String user_name, String user_password) {
		Login login = loginRepository.findByUserName(user_name);
		if(login==null)
		{
			return new AuthResult(false,"User Does Not Exist"); 
		}
		if(!login.getUserPassword().equals(user_password))
		{
			int attemptsLeft = login.getNo_attempts_left(); 
            if (attemptsLeft > 0) {
                login.setNo_attempts_left(attemptsLeft - 1);
                if(login.getNo_attempts_left()==0)
                {
                	login.setStatus("BLOCKED");
                }
                loginRepository.save(login);
            }
            return new AuthResult(false, "Invalid Login Credentials. Attempts left: " + login.getNo_attempts_left()); 
		}
		else
		{
			if(login.getStatus().equals("BLOCKED"))
			{
				return new AuthResult(false, "Account is Blocked, Please contact Admin"); 
			}
			else if(login.getStatus().equals("INACTIVE"))
			{
				return new AuthResult(false, "Account is Inactive, Please contact Admin"); 
			}
			return new AuthResult(true, "Success"); 
		}
	}

	

	

	

	

}
