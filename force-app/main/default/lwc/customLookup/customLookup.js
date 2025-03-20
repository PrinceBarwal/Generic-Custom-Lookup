import { LightningElement, wire } from 'lwc';
import customLookupController from '@salesforce/apex/customLookupController.getsObjectRecords';
const DELAY = 300;
export default class CustomLookup extends LightningElement {

    apiName = "Account";
    searchValue = "Test";
    objectLabel  = 'Account';
    iconName = 'standard:account';
    delayTimeOut;

    @wire(customLookupController, 
        {
            objectApiName : '$apiName',
            searchKey : '$searchValue'
        }
    )outputs

    // get showOutput(){
    //     return this.outputs.data ? true : false;
    // }

    changeHandler(event){
        window.clearTimeout(this.delayTimeOut);
        let enteredValue = event.target.value;
        this.delayTimeOut = setTimeout(() => {
            this.searchValue = enteredValue;
        } , DELAY);
    }
}