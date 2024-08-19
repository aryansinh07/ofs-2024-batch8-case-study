import * as ko from 'knockout';
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import 'ojs/ojknockout';
import 'ojs/ojtable';
import "oj-c/input-number";
import "oj-c/button";
import "oj-c/input-text";

type Account = {
    account_type: string , 
    account_no : number , 
    balance : number , 
    rate_of_interest: number , 
    maturity_period: number | null , 
    min_balance: number | null , 
    customer_id : number 
  };

type K = Account['account_no'];

class AccountsViewModel {

  keyAttributes = 'account_no';
  dataprovider: ko.Observable<RESTDataProvider<K, Account> | null>;
  columns: ko.ObservableArray<object>;

  constructor() {
    this.dataprovider = ko.observable(null);  // Initialize with null
    this.columns = ko.observableArray<object>([
        { headerText: "Type", field: "account_type", resizable: "enabled", id: "account_type" },
        { headerText: "Account No", field: "account_no", resizable: "enabled", id: "account_no" },
        { headerText: "Balance", field: "balance", resizable: "enabled", id: "balance" },
        { headerText: "Rate of Interest", field: "rate_of_interest", resizable: "enabled", id: "rate_of_interest" },
        { headerText: "Maturity Period", field: "maturity_period", resizable: "enabled", id: "maturity_period" },
        { headerText: "Min Balance", field: "min_balance", resizable: "enabled", id: "min_balance" },
      ]);      
  }

  public AllAccounts = async (event: Event) => {

    const login_user_name = sessionStorage.getItem("login_user_name");
    const apiUrl = "http://localhost:8080/bankapi/get-customer-accounts-detail/" + login_user_name ;
    console.log(apiUrl);

    // Reassign RESTDataProvider with the new URL using ko.observable
    this.dataprovider(new RESTDataProvider<K, Account>({
        keyAttributes: this.keyAttributes,
        url: apiUrl,
        transforms: {
          fetchFirst: {
            request: async (options) => {
              const url = new URL(options.url);
              return new Request(url.href);
            },
            response: async ({ body }) => {
              console.log('Fetched data:', body); // Console log the fetched data
              return {
                data: body
              };
            }
          }
        }
      }));      

    let table = document.getElementById("sampleDemo");
    if (table) {
      table.hidden = false;
    }
  }

  
}

export = AccountsViewModel ; 