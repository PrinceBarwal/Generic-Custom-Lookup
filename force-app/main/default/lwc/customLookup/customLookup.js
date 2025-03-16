import { LightningElement, wire } from 'lwc';
import customLookupController from '@salesforce/apex/customLookupController.getsObjectRecords';

export default class CustomLookup extends LightningElement {

    apiName = "Account";
    searchValue = "Test";
    objectLabel  = 'Account';
    iconName = 'standard:account';

    @wire(customLookupController, 
        {
            objectApiName : '$apiName',
            searchKey : '$searchValue'
        }
    )outputs

    // get showOutput(){
    //     return this.outputs.data ? true : false;
    // }
}