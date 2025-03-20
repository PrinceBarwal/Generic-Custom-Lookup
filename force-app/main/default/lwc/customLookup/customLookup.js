import { LightningElement, wire } from 'lwc';
import customLookupController from '@salesforce/apex/customLookupController.getsObjectRecords';
const DELAY = 300;
export default class CustomLookup extends LightningElement {

    apiName = "Account";
    searchValue;
    objectLabel  = 'Account';
    iconName = 'standard:account';
    delayTimeOut;
    selectedRecord = {
        selectedId : "",
        selectedName : ""
    }

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

    clickHandler(event){
        let selectedId = event.currentTarget.dataset.item;
        console.log('select Id',selectedId);
        let outputRecord = this.outputs.finds(
            (currItem) => currItem.Id === selectedId
        );
        this.selectedRecord = {
            selectedId : outputRecord.Id,
            selectedName : outputRecord.Name
        }
    }   
}