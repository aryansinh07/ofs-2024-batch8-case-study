package com.ofss.main.domain;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="account_detail")
public class Account 
{
    @Column(name="account_type")
    private String account_type ; 

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int account_no ; 

    @Column(name="date_of_opening")
    private LocalDate date_of_opening ; 

    @Column(name="balance")
    private float balance ; 

    @Column(name="rate_of_interest")
    private float rate_of_interest ; 

    @Column(name="maturity_period")
    private Integer maturity_period ; 

    @Column(name="min_balance")
    private float min_balance ; 

    @Column(name="customer_id")
    private int customerId ;

    @Override
    public String toString() {
        return "Account [account_type=" + account_type + ", account_no=" + account_no + ", date_of_opening="
                + date_of_opening + ", balance=" + balance + ", rate_of_interest=" + rate_of_interest
                + ", maturity_period=" + maturity_period + ", min_balance=" + min_balance + ", customer_id="
                + customerId + "]";
    }

    public Account() {
        super();
    }

    public Account(String account_type, int account_no, LocalDate date_of_opening, float balance,
            float rate_of_interest, Integer maturity_period, float min_balance, int customer_id) {
        super();
        this.account_type = account_type;
        this.account_no = account_no;
        this.date_of_opening = date_of_opening;
        this.balance = balance;
        this.rate_of_interest = rate_of_interest;
        this.maturity_period = maturity_period != null ? maturity_period : 0; // Set default value
        this.min_balance = min_balance;
        this.customerId = customer_id;
    }

    public String getAccount_type() {
        return account_type;
    }

    public void setAccount_type(String account_type) {
        this.account_type = account_type;
    }

    public int getAccount_no() {
        return account_no;
    }

    public void setAccount_no(int account_no) {
        this.account_no = account_no;
    }

    public LocalDate getDate_of_opening() {
        return date_of_opening;
    }

    public void setDate_of_opening(LocalDate date_of_opening) {
        this.date_of_opening = date_of_opening;
    }

    public float getBalance() {
        return balance;
    }

    public void setBalance(float balance) {
        this.balance = balance;
    }

    public float getRate_of_interest() {
        return rate_of_interest;
    }

    public void setRate_of_interest(float rate_of_interest) {
        this.rate_of_interest = rate_of_interest;
    }

    public Integer getMaturity_period() {
        return maturity_period;
    }

    public void setMaturity_period(Integer maturity_period) {
        if (maturity_period == null) {
            this.maturity_period = 0; // Set default value, e.g., 0
        } else {
            this.maturity_period = maturity_period;
        }
    }

    public float getMin_balance() {
        return min_balance;
    }

    public void setMin_balance(float min_balance) {
        this.min_balance = min_balance;
    }

    public int getCustomer_id() {
        return customerId;
    }

    public void setCustomer_id(int customer_id) {
        this.customerId = customer_id;
    }
}
