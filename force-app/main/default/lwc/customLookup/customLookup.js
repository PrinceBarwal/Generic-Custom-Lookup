import { LightningElement, wire } from 'lwc';
import customLookupController from '@salesforce/apex/customLookupController.getsObjectRecords';

export default class CustomLookup extends LightningElement {

    apiName = "Account";
    searchValue = "Test";
    objectLabel  = 'Account';

    @wire(customLookupController, 
        {
            objectApiName : '$apiName',
            searchKey : '$searchValue'
        }
    )outputs
}