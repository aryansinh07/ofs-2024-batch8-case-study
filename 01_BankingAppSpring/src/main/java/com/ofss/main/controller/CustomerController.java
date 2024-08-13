package com.ofss.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ofss.main.domain.Account;
import com.ofss.main.domain.Customer;
import com.ofss.main.service.AccountService;
import com.ofss.main.service.CustomerService;


@CrossOrigin()
@RequestMapping("bankapi")
@RestController
public class CustomerController 
{
     @Autowired
     private CustomerService customerService ; 
     
     @Autowired
     private AccountService accountService ; 
     
     @GetMapping("get")
     public String testApi()
     {
    	 return "Server is up and running" ; 
     }
     
     // http://localhost:8080/bankapi/addcustomer 
     @PostMapping("addcustomer")
     public Customer addNewCustomerToDB(@RequestBody Customer customer)
     { 
     	return customerService.addNewCustomer(customer); 
     }
     
     
     // http://localhost:8080/bankapi/getallcustomers
     @GetMapping("getallcustomers")
     public List<Customer> getAllCustomersFromDB()
     {
    	 return customerService.getAllCustomer(); 
     }
     
     // http://localhost:8080/bankapi/getcustomerdetail/{customer_id}
     @GetMapping("getcustomerdetail/{customer_id}")
     public Customer getOneCustomerFromDB(@PathVariable int customer_id)
     {
    	 return customerService.getOneCustomer(customer_id); 
     }
     
     @PutMapping("updatecustomerdetail")
     public Customer updateCustomerIntoDB(@RequestBody Customer customer)
     {
    	 return customerService.updateCustomer(customer) ; 
     }
     
     // http://localhost:8080/bankapi/getallaccounts
     @GetMapping("getallaccounts")
     public List <Account> getAllAccountsFromDB()
     {
    	 return accountService.getAllAccounts(); 
     }
     
     @GetMapping("get-customer-accounts-detail/{userName}")
     public List <Account> getCustomerAccountsFromDB(@PathVariable String userName)
     {
    	 Customer customer = customerService.getCustomerByUserName(userName);
    	 return accountService.getCustomerAccounts(customer.getCustomer_id()); 
     }
}
