/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";

  import * as ko from "knockout";
  import * as Bootstrap from "ojs/ojbootstrap";
  import "oj-c/input-text";
  import "ojs/ojknockout";
  import "oj-c/input-number";
  import 'oj-c/input-password';
  import "ojs/ojformlayout";
  import "ojs/ojdatetimepicker";
  import "ojs/ojlabel";
  import "oj-c/button";
  import 'ojs/ojmessagebanner';
  import "ojs/ojprogress-bar";
  import "ojs/ojcheckboxset";
  import { IntlConverterUtils } from "ojs/ojconverterutils-i18n";
  import { MessageBannerItem, MessageBannerElement } from 'ojs/ojmessagebanner';
  import MutableArrayDataProvider = require('ojs/ojmutablearraydataprovider');


  type DemoMessageBannerItem = MessageBannerItem & {
    id: string;
  };

class DashboardViewModel {

    // value: ko.Observable<string>;
    // name: ko.Observable<string> | ko.Observable<any>; 
    // salary : ko.Observable<number> ; 
    // password: ko.Observable<string> ; 
    // date : ko.Observable<string> ;
    // readonly personalInformationMessages: MutableArrayDataProvider<string, DemoMessageBannerItem>;
    // private counter: number;
    // readonly closePersonalInformationMessage = (
    //   event: MessageBannerElement.ojClose<string, DemoMessageBannerItem>
    // ) => {
    //   // remove the message from the data to close it
    //   let data = this.personalInformationMessages.data.slice();
    //   const closeMessageKey = event.detail.key;
  
    //   data = data.filter((message) => (message as any).id !== closeMessageKey);
    //   this.personalInformationMessages.data = data;
    // };

    // readonly updatePersonalInfo = () => {
    //   // remove the message from the data to close it
    //   let data = this.personalInformationMessages.data.slice();
    //   data.push({
    //     id: `message-${++this.counter}`,
    //     severity: 'confirmation',
    //     summary: 'Updated personal information',
    //     detail: 'The provided personal information of the employee has been updated in the database.'
    //   });
    //   this.personalInformationMessages.data = data;
    // };
    // readonly indeterminate = ko.observableArray();
    // readonly progressValue = ko.observable(20);
    
    constructor() {
      // this.value = ko.observable("Green");
      // this.name = ko.observable("Aryan"); 
      // this.salary = ko.observable(0); 
      // this.password = ko.observable(""); 
      // this.date = ko.observable(
      //   IntlConverterUtils.dateToLocalIso(new Date(2013, 0, 1))
      // );

     
      // Bind the handleSubmit function to the instance
      // const initialPersonalSectionData = [
      //   {
      //     id: 'message',
      //     severity: 'confirmation',
      //     summary: 'Updated personal information',
      //     detail:
      //       'The provided personal information of the employee has been updated in the database.',
      //     timestamp: new Date().toISOString()
      //   }
      // ];
      // this.personalInformationMessages = new MutableArrayDataProvider(initialPersonalSectionData, {
      //   keyAttributes: 'id'
      // });
      // this.counter = 0  ; 
      
      
     
    }

  /**
   * Optional ViewModel method invoked after the View is inserted into the
   * document DOM.  The application can put logic that requires the DOM being
   * attached here.
   * This method might be called multiple times - after the View is created
   * and inserted into the DOM and after the View is reconnected
   * after being disconnected.
   */
  connected(): void {

  }

  

}

export = DashboardViewModel;
