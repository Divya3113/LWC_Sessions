import { LightningElement,track } from 'lwc';

export default class SimpleCalculatorExample extends LightningElement {
   
    @track currentResult;
    firstNumber;
    secondNumber;
    @track previousResults=[];
    @track check=false;
    numberChangehandler(event){
       const inputBoxName= event.target.name;
       if(inputBoxName=='firstnumber'){
        this.firstNumber=event.target.value;
       }
     else if(inputBoxName=='secondnumber'){
        this.secondNumber=event.target.value;
     }
      
    }

    addHandler(){
        const firstNum=parseInt(this.firstNumber);
        const secondNum=parseInt(this.secondNumber); 
        //this.currentResult='Result of '+firstNum+' + '+secondNum+'='+(firstNum+secondNum);
        this.currentResult=`Result of ${firstNum} + ${secondNum} is ${firstNum+secondNum}`;
        this.previousResults.push(this.currentResult);
    }
    subtractHandler(){
        const firstNum=parseInt(this.firstNumber);
        const secondNum=parseInt(this.secondNumber); 
        //this.currentResult='Result of '+firstNum+' + '+secondNum+'='+(firstNum+secondNum);
        this.currentResult=`Result of ${firstNum} - ${secondNum} is ${firstNum-secondNum}`;
        this.previousResults.push(this.currentResult);
    }
    multiplyHandler(){
        const firstNum=parseInt(this.firstNumber);
        const secondNum=parseInt(this.secondNumber); 
        //this.currentResult='Result of '+firstNum+' + '+secondNum+'='+(firstNum+secondNum);
        this.currentResult=`Result of ${firstNum} * ${secondNum} is ${firstNum*secondNum}`;
        this.previousResults.push(this.currentResult);
    }
    divideHandler(){
        const firstNum=parseInt(this.firstNumber);
        const secondNum=parseInt(this.secondNumber);  
        //this.currentResult='Result of '+firstNum+' + '+secondNum+'='+(firstNum+secondNum);
        this.currentResult= `Result of ${firstNum} / ${secondNum} is ${firstNum/secondNum}`;
        this.previousResults.push(this.currentResult);
    }
    
    previousResult(event)
    {
         this.check=event.target.checked;

    }
}