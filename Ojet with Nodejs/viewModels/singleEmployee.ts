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

class SingleEmployeeViewModel {
  keyAttributes = 'id';
  dataprovider: ko.Observable<RESTDataProvider<K, Employee>>;
  inputid: ko.Observable<number>;
 

  constructor() {
    this.inputid = ko.observable(0);
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

 

  
}

export = SingleEmployeeViewModel;

