import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

height;
weight;
result;
heightHandler(event){
this.height=event.target.value;
}
weightHandler(event){
    this.weight=event.target.value;
    }
    bmiCalculator(){
     this.result=this.weight/(this.height*this.height);

    }
    get bmiValue()
    {
        return `BMI value is ${this.result}`;
    }
}