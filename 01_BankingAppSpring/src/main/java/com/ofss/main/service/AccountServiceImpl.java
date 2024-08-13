package com.ofss.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Account;
import com.ofss.main.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService
{

	@Autowired
	private AccountRepository accountRepository ; 
	@Override
	public List<Account> getAllAccounts() {
		// TODO Auto-generated method stub
		return (List<Account>)accountRepository.findAll(); 
	}
	
	@Override
	public List<Account> getCustomerAccounts(int customer_id) {
		return accountRepository.findByCustomerId(customer_id); 
	}

}
