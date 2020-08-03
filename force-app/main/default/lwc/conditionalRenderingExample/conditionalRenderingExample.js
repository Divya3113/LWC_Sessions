import { LightningElement,track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displaydiv=false;
    showDiv(event){
        this.displaydiv=event.target.checked;
    }
    @track cityList=['Jaipur','Ujjain','Mumbai','Indore','Ahemedabad'];
}

