package com.ofss.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {
	
	@Id
	@Column(name="user_name")
    private String userName ; 
	
	@Column(name="user_password")
    private String userPassword ; 
	
	@Column(name="no_attempts_left")
    private int no_attempts_left ;
	
	@Column(name="status")
    private String status ; 



    public Login() {
    	this.no_attempts_left = 3;
        this.status = "INACTIVE";
    }
    
    public Login(String user_name , String user_password){
          this.userName = user_name ; 
          this.userPassword = user_password ; 
          this.no_attempts_left = 3 ; 
          this.status = "INACTIVE" ; 
    }

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public int getNo_attempts_left() {
		return no_attempts_left;
	}

	public void setNo_attempts_left(int no_attempts_left) {
		this.no_attempts_left = no_attempts_left;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Login [userName=" + userName + ", userPassword=" + userPassword + ", no_attempts_left="
				+ no_attempts_left + ", status=" + status + "]";
	}
    
    
}