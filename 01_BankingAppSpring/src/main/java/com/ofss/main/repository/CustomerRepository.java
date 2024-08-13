package com.ofss.main.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ofss.main.domain.Customer;

public interface CustomerRepository extends CrudRepository<Customer, Integer>
{
	@Query("SELECT c FROM Customer c WHERE c.login.userName = :userName")
    Customer findByLoginUserName(@Param("userName") String userName);
}
