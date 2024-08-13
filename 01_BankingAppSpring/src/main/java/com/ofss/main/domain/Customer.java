package com.ofss.main.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer_details")
public class Customer {
    private String first_name;
    private String last_name;
    private int age;
    private String email_id;
    private long adhaar_no;
    private String city;
    private long mobile_no;
    private String user_password ; 
    

    public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customer_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "login_user_name", referencedColumnName = "user_name")
    private Login login;

    public Customer() {
    }

    public Customer(String first_name, String last_name, int age, String email_id, long adhaar_no, String city,
                    long mobile_no, String login_user_name, String user_password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.email_id = email_id;
        this.adhaar_no = adhaar_no;
        this.city = city;
        this.mobile_no = mobile_no;
        this.user_password = user_password ; 
        this.login = new Login();
        this.login.setUserName(login_user_name);
        this.login.setUserPassword(user_password);
    }

    public Customer(String first_name, String last_name, int age, String email_id, long adhaar_no, String city,
                    long mobile_no, int customer_id, String login_user_name, String user_password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.email_id = email_id;
        this.adhaar_no = adhaar_no;
        this.city = city;
        this.mobile_no = mobile_no;
        this.customer_id = customer_id;
        this.login = new Login();
        this.user_password = user_password ; 
        this.login.setUserName(login_user_name);
        this.login.setUserPassword(user_password);
    }

    

    // Getters and setters for all fields

    @Override
	public String toString() {
		return "Customer [first_name=" + first_name + ", last_name=" + last_name + ", age=" + age + ", email_id="
				+ email_id + ", adhaar_no=" + adhaar_no + ", city=" + city + ", mobile_no=" + mobile_no
				+ ", user_password=" + user_password + ", customer_id=" + customer_id + "]";
	}

	public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public long getAdhaar_no() {
        return adhaar_no;
    }

    public void setAdhaar_no(long adhaar_no) {
        this.adhaar_no = adhaar_no;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public long getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(long mobile_no) {
        this.mobile_no = mobile_no;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public Login getLogin() {
        return login;
    }

    public void setLogin(Login login) {
        this.login = login;
    }
}
