import { LightningElement, wire, api } from 'lwc';
import customLookupController from '@salesforce/apex/customLookupController.getsObjectRecords';
const DELAY = 300;
export default class CustomLookup extends LightningElement {

    @api apiName = "Account";
    searchValue;
    @api objectLabel  = 'Account';
    @api iconName = 'standard:account';
    delayTimeOut;
    selectedRecord = {
        selectedId : "",
        selectedName : ""
    }
    displayOptions = false;

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
            this.displayOptions = true;
        } , DELAY);
    }

    clickHandler(event){
        let selectedId = event.currentTarget.dataset.item;
        console.log('select Id',selectedId);
        let outputRecord = this.outputs.data.find(
            (currItem) => currItem.Id === selectedId
        );
        this.selectedRecord = {
            selectedId : outputRecord.Id,
            selectedName : outputRecord.Name
        };
        this.displayOptions = false;
    }   

    get isRecordSelected(){
        return this.selectedRecord.selectedId === '' ? false : true;
    }

    removalSelectionHandler(event){
        console.log('event called');
        this.selectedRecord = {
            selectedId : "",
            selectedName : ""
        };
        this.displayOptions = false;
    }
}