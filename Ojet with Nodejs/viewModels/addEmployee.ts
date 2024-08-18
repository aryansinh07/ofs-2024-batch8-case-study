import * as ko from 'knockout';
import * as Bootstrap from 'ojs/ojbootstrap';
import 'ojs/ojknockout';
import 'ojs/ojtable';
import "oj-c/input-number";
import "oj-c/button";
import "oj-c/input-text";
import { RESTDataProvider } from "ojs/ojrestdataprovider";
import "ojs/ojtable";

type D = { id: number; name: string; salary: number };
type K = D["id"];


class addEmployeeViewModel {
  keyAttributes = 'id';
  name : ko.Observable<string> ; 
  salary : ko.Observable<number> ; 
  dataprovider: RESTDataProvider<K, D>;
  url = "http://localhost:8080/employees";

  constructor() {
    this.name = ko.observable(""); 
    this.salary = ko.observable(0); 
    this.dataprovider = new RESTDataProvider({
        keyAttributes: this.keyAttributes,
        url: this.url,

        transforms: {
            fetchFirst: {
                request: async (options) => {
                    const url = new URL(options.url);
                    const { size, offset } = options.fetchParameters;
                    console.log(size,offset); 
                    url.searchParams.set("limit", String(size));
                    url.searchParams.set("offset", String(offset));
                    console.log(url.href); 
                    return new Request(url.href);
                },
                response: async ({ body }) => {
                    const data = body ;
                    return { data };
                },
            },
        },
    });
  }
  
  // add to the observableArray
  public addRow = async () => {
    // Create row object based on form inputs
    const row = {
        name : this.name() ,
        salary :  this.salary() 
    };
    // Create and send request to REST service to add row
    const request = new Request(this.url, {
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });
    const response = await fetch(request);
    const addedRow = await response.json();
    // Create add mutate event and call mutate method
    // to notify dataprovider consumers that a row has been
    // added
    
    const addedRowIndex = addedRow.index;
    delete addedRow.index;
    const addedRowKey = addedRow[this.keyAttributes];
    const addedRowMetaData = { key: addedRowKey };
    this.dataprovider.mutate({
      add: {
        data: [addedRow],
        indexes: [addedRowIndex],
        keys: new Set([addedRowKey]),
        metadata: [addedRowMetaData],
      },
    });
  };

}

export = addEmployeeViewModel;

