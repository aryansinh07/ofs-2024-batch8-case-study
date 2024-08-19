import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import "oj-c/button";
import 'oj-c/form-layout';

class RegisterViewModel {
     first_name : ko.Observable<string> 
     last_name : ko.Observable<string>
     age: ko.Observable<number>
     email_id: ko.Observable<string>
     adhaar_no : ko.Observable<number>
     city: ko.Observable<string>
     mobile_no : ko.Observable<number>
     login_user_name : ko.Observable<string>
     user_password : ko.Observable<string>

     constructor()
     {
         this.first_name = ko.observable("") ; 
         this.last_name = ko.observable("") ; 
         this.age = ko.observable(0); 
         this.email_id = ko.observable(""); 
         this.adhaar_no = ko.observable(0); 
         this.city = ko.observable(""); 
         this.mobile_no = ko.observable(0); 
         this.login_user_name = ko.observable(""); 
         this.user_password = ko.observable(""); 

         
     }

     private onSubmit = async (event: Event) => {
        const first_name = this.first_name() ; 
        console.log(first_name);
        
        const last_name = this.last_name() ;
        console.log(last_name);

        const age = this.age() ; 
        const email_id = this.email_id(); 
        const adhaar_no = this.adhaar_no() ; 
        const city = this.city() ; 
        const mobile_no = this.mobile_no() ; 
        const login_user_name = this.login_user_name(); 
        const user_password = this.user_password() ; 
    
        const customerData = {
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
            "email_id": email_id,
            "adhaar_no": adhaar_no,
            "city": city,
            "mobile_no": mobile_no,
            "user_password":user_password,
            "login": {
                "userName": login_user_name,
                "userPassword": user_password
            }
        }
    
        const customerJsonData = JSON.stringify(customerData);
        console.log(customerJsonData);  
    
    try {
        const response = await fetch("http://localhost:8080/bankapi/addcustomer", {
            method: 'POST',
            body: customerJsonData,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            if (response.status === 401) {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            } else {
                throw new Error('Network response was not ok');
            }
        }

        const data = await response.text(); // Assuming the server returns a plain text response
        console.log('Success:', data); // Handle the successful response data
        window.location.href = "http://localhost:8000/?ojr=login"; // Redirect to another page if login is successful

    } catch (error) {
        console.error('Error:'); // Handle any errors
    }
     }
}

export = RegisterViewModel ; 