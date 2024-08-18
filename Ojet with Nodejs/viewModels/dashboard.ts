// import * as AccUtils from "../accUtils";
// import * as ko from "knockout";
// import * as Bootstrap from "ojs/ojbootstrap";
// import "oj-c/input-text";
// import "ojs/ojknockout";
// import "oj-c/input-number";
// import 'oj-c/input-password';
// import "ojs/ojformlayout";
// import "ojs/ojlabel";
// import "oj-c/button";
// import "ojs/ojcheckboxset";

// //Activity-04 import 
// import ArrayDataProvider = require("ojs/ojarraydataprovider");
// import "ojs/ojtable";

// class DashboardViewModel {
//   // Initialize dataprovider as null or with an empty ArrayDataProvider
//   public dataprovider: ko.Observable<any> = ko.observable(null);

//   constructor() { }

//   public handleClick = async (event: Event) => {
    
//     let url = "http://localhost:8080/employees";
//     const response = await fetch(url).then((data) => {
//       return data.json();
//     });
//     const emplyArray = response[0]; // Assuming response is an array of employees
//     this.dataprovider(new ArrayDataProvider(emplyArray, {
//       keyAttributes: "id",
//       implicitSort: [{ attribute: "id", direction: "ascending" }]
//     }));
     
//     const table = document.getElementById("componentDemoContent"); 
//     if(table)
//     {
//       table.hidden = false ; 
//     }
//   }

//   connected(): void {
//     // Your connected implementation
//   }
// }

// export = DashboardViewModel;

import * as ko from 'knockout';
import * as Bootstrap from 'ojs/ojbootstrap';
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import 'ojs/ojknockout';
import 'ojs/ojtable';
import "oj-c/input-number";
import "oj-c/button";
import "oj-c/input-text";

type Employee = {
  id: number;
  name: string;
  salary: number;
};

type K = Employee['id'];

class DashboardViewModel {
  keyAttributes = 'id';
  dataprovider: ko.Observable<RESTDataProvider<K, Employee>>;
  inputid: ko.Observable<number>;
  name : ko.Observable<string> ; 
  salary : ko.Observable<number> ; 

  constructor() {
    this.inputid = ko.observable(0);
    this.name = ko.observable(""); 
    this.salary = ko.observable(0); 
    this.dataprovider = ko.observable(new RESTDataProvider<K, Employee>({
      keyAttributes: this.keyAttributes,
      url: "http://localhost:8080/employees",
      transforms: {
        fetchFirst: {
          request: async (options) => new Request(options.url),
          response: async ({ body }) => ({
            data: body,
            totalSize: body.length,
            hasMore: false
          })
        }
      }
    }));
  }

  public singleEmployee = async (event: Event) => {
    const apiUrl = "http://localhost:8080/employees/" + this.inputid();
    console.log(apiUrl); 
    // Reassign RESTDataProvider with the new URL using ko.observable
    this.dataprovider(new RESTDataProvider<K, Employee>({
      keyAttributes: this.keyAttributes,
      url: apiUrl,
      transforms: {
        fetchFirst: {
          request: async (options) => {
            const url = new URL(options.url);
            const { size, offset } = options.fetchParameters;
            url.searchParams.set('limit', String(size));
            url.searchParams.set('offset', String(offset));
            return new Request(url.href);
          },
          response: async ({ body }) => {
            const data = body;
            const totalSize = data.length;
            const hasMore = false;
            return { data, totalSize, hasMore };
          }
        }
      }
    }));
    let table = document.getElementById("sampleDemo") ; 
    if(table)
    {
      table.hidden = false ; 
    }
  }

  public AllEmployee = async (event: Event) => {
    const apiUrl = "http://localhost:8080/employees/" ;
    console.log(apiUrl); 
    // Reassign RESTDataProvider with the new URL using ko.observable
    this.dataprovider(new RESTDataProvider<K, Employee>({
      keyAttributes: this.keyAttributes,
      url: apiUrl,
      transforms: {
        fetchFirst: {
          request: async (options) => {
            const url = new URL(options.url);
            const { size, offset } = options.fetchParameters;
            url.searchParams.set('limit', String(size));
            url.searchParams.set('offset', String(offset));
            return new Request(url.href);
          },
          response: async ({ body }) => {
            const data = body[0];
            const totalSize = data.length;
            const hasMore = false;
            return { data, totalSize, hasMore };
          }
        }
      }
    }));
    let table = document.getElementById("sampleDemo") ; 
    if(table)
    {
      table.hidden = false ; 
    }
  }

  public EnablePosting = async () => {
      let form = document.getElementById("employeeform"); 
      if(form)
      {
        form.hidden = false ; 
      }
  }

  public EnableSingleEmployee = async () => {
    let inputform = document.getElementById("input-id"); 
    if(inputform)
    {
      inputform.hidden = false ; 
    }
}
}

export = DashboardViewModel;

