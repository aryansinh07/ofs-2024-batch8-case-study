package com.ofss.main.domain;

public class AuthResult 
{
	private boolean isValid;
    private String message;

    public AuthResult(boolean isValid, String message) {
        this.isValid = isValid;
        this.message = message;
    }

    public boolean isValid() {
        return isValid;
    }

    public String getMessage() {
        return message;
    }
}