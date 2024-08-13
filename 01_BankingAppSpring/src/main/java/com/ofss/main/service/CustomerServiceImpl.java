package com.ofss.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ofss.main.domain.Customer;
import com.ofss.main.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository ; 

	@Override
	public Customer addNewCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer); 
	}

	@Override
	public List<Customer> getAllCustomer() {
		
		return (List<Customer>)customerRepository.findAll();
	}

	@Override
	public Customer getOneCustomer(int customer_id) {
		Optional <Customer> customer = customerRepository.findById(customer_id); 
		if(customer.isPresent())
		{
			return customer.get() ; 
		}
		return null ; 
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer); 
	}

	@Override
	public Customer getCustomerByUserName(String userName) {
		return customerRepository.findByLoginUserName(userName); 
	}
	
	

}
