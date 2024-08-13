package com.ofss.main.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ofss.main.domain.Account;

public interface AccountRepository extends CrudRepository<Account, Integer>{
	List<Account> findByCustomerId(int customerId);
}
