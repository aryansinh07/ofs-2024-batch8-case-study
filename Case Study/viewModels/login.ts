import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/button";

class LoginViewModel {
    user_name : ko.Observable<string>
    user_password: ko.Observable<string>
    constructor()
    {
         this.user_name = ko.observable("")
         this.user_password = ko.observable("") ; 
    }

    private onSubmit = () => {
        const Data = {
        "userName": this.user_name(),
        "userPassword": this.user_password()
        }

    const jsonData = JSON.stringify(Data); 
    //console.log(jsonData); 

    fetch("http://localhost:8080/bankapi/login", {
        method: 'POST',
        body: jsonData,
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                return response.json().then(json => { 
                    return { valid: false, message: json.message || 'Unauthorized' };
                });
            } else {
                throw new Error('Network response was not ok');
            }
        }
        return response.json(); // Assuming the server returns a JSON response
    })
    .then(data => {
        const errorDiv = document.getElementById('error');
        if(errorDiv)
        {
            errorDiv.innerHTML = '';
        }
        if (!data.valid) {
            // Display the error message if the login is not valid
            if(errorDiv)
            {
                errorDiv.innerHTML = data.message ; 
            }
        } else {
            // Handle the successful response data
            sessionStorage.setItem('login_user_name', this.user_name()); 
            console.log(sessionStorage.getItem('login_user_name')); 
            window.location.href = "/"; // Redirect to another page if login is successful
        }
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors not related to login validity
    });

    }
}

export = LoginViewModel ; 