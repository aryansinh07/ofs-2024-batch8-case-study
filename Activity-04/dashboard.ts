import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import * as Bootstrap from "ojs/ojbootstrap";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import 'oj-c/input-password';
import "ojs/ojformlayout";
import "ojs/ojlabel";
import "oj-c/button";
import "ojs/ojcheckboxset";

//Activity-04 import 
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojtable";

class DashboardViewModel {
  // Initialize dataprovider as null or with an empty ArrayDataProvider
  public dataprovider: ko.Observable<any> = ko.observable(null);

  constructor() { }

  public handleClick = async (event: Event) => {
    let url = "http://localhost:8080/employees";
    const response = await fetch(url).then((data) => {
      return data.json();
    });
    const emplyArray = response[0]; // Assuming response is an array of employees
    this.dataprovider(new ArrayDataProvider(emplyArray, {
      keyAttributes: "id",
      implicitSort: [{ attribute: "id", direction: "ascending" }]
    }));
  }

  connected(): void {
    // Your connected implementation
  }
}

export = DashboardViewModel;


