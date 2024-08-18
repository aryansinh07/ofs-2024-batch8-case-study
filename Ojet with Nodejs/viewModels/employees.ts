// import * as ko from 'knockout';
// import * as Bootstrap from 'ojs/ojbootstrap';
// import { RESTDataProvider } from 'ojs/ojrestdataprovider';
// import 'ojs/ojknockout';
// import 'ojs/ojtable';
// import "oj-c/input-number";
// import "oj-c/button";
// import "oj-c/input-text";

// type Employee = {
//   id: number;
//   name: string;
//   salary: number;
// };

// type K = Employee['id'];

// class EmployeesViewModel {
//     keyAttributes = 'id';
//     dataprovider: ko.Observable<RESTDataProvider<K, Employee>>;
//     offset: ko.Observable<number> ;  
    
  
//     constructor() {
//       this.offset = ko.observable(0); 
//       this.dataprovider = ko.observable(new RESTDataProvider<K, Employee>({
//         keyAttributes: this.keyAttributes,
//         url: "http://localhost:8080/employees",
//         transforms: {
//           fetchFirst: {
//             request: async (options) => new Request(options.url),
//             response: async ({ body }) => ({
//               data: body
//             })
//           }
//         }
//       }));
//     }
    
//     public AllEmployee = async (event: Event) => {
//       const apiUrl = "http://localhost:8080/employees/" ;
//       // Reassign RESTDataProvider with the new URL using ko.observable
//       this.dataprovider(new RESTDataProvider<K, Employee>({
//         keyAttributes: this.keyAttributes,
//         url: apiUrl,
//         transforms: {
//           fetchFirst: {
//             request: async (options) => {
//               const url = new URL(options.url);
//               const { size } = options.fetchParameters;
//               url.searchParams.set('limit', String(size));
//               url.searchParams.set('offset', String(this.offset()));
//               this.offset = ko.observable(this.offset()+5); 
//               console.log(url.href);
//               return new Request(url.href);
//             },
//             response: async ({ body }) => {
//               const data = body[0];
//               return { data };
//             }
//           }
//         }
//       }));
//       let table = document.getElementById("sampleDemo") ; 
//       if(table)
//       {
//         table.hidden = false ; 
//       }
//     }
//   }

//   export = EmployeesViewModel ; 

import * as ko from 'knockout';
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

class EmployeesViewModel {
  keyAttributes = 'id';
  dataprovider: ko.Observable<RESTDataProvider<K, Employee> | null>;
  size: ko.Observable<number>;

  constructor() {
    this.size = ko.observable(5); 
    this.dataprovider = ko.observable(null);  // Initialize with null
  }

  public AllEmployee = async (event: Event) => {
    const apiUrl = "http://localhost:8080/employees/";
    console.log(apiUrl);

    // Reassign RESTDataProvider with the new URL using ko.observable
    this.dataprovider(new RESTDataProvider<K, Employee>({
      keyAttributes: this.keyAttributes,
      url: apiUrl,
      transforms: {
        fetchFirst: {
          request: async (options) => {
            const url = new URL(options.url);
            const { offset } = options.fetchParameters;
            url.searchParams.set('limit', String(this.size()));
            url.searchParams.set('offset', String(offset));
            this.size(this.size() + 5);
            console.log(url.href);
            return new Request(url.href);
          },
          response: async ({ body }) => ({
            data: body
          })
        }
      }
    }));

    let table = document.getElementById("sampleDemo");
    if (table) {
      table.hidden = false;
    }
  }

  
}

export = EmployeesViewModel;
