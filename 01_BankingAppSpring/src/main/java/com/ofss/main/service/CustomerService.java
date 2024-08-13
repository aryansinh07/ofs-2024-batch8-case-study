package com.ofss.main.service;

import java.util.List;

import com.ofss.main.domain.Customer;

public interface CustomerService 
{
	public Customer addNewCustomer(Customer customer);
	
	public List<Customer> getAllCustomer(); 
	
	public Customer getOneCustomer(int customer_id); 
	
	public Customer updateCustomer(Customer customer); 
	
	public Customer getCustomerByUserName(String userName); 
}
