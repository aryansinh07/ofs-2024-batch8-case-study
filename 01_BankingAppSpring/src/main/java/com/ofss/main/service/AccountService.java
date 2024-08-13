package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Account;

public interface AccountService 
{
   public List<Account> getAllAccounts();
   
   public List<Account> getCustomerAccounts(int customer_id); 
}
