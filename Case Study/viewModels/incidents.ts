/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import "ojs/ojknockout";
  import * as ko from "knockout";
  import * as Bootstrap from "ojs/ojbootstrap";
  import "knockout";
class IncidentsViewModel {
  
  userName : ko.Observable<any> ; 
  constructor() {
       this.userName = ko.observable(""); 
       if(sessionStorage.getItem("userName")!=null)
       {
          this.userName = ko.observable(sessionStorage.getItem("userName")); 
       }
       console.log(this.userName()); 
  }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  

  /**
   * Optional ViewModel method invoked after the View is disconnected from the DOM.
   */
}

export = IncidentsViewModel;
