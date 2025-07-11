let btnContainer=document.querySelector(".btn-container");
let numberArea=document.querySelector(".number-area");
let operatorArea=document.querySelector(".operator-area");

let operandOne;
let operandtwo;
btnContainer.addEventListener('click',(evt)=>{
    // console.log("btn is clicked");
    if(evt.target.classList.contains('num')){
        // console.log("btn was found");
        let input=evt.target.closest("div").innerText;
        numberArea.innerText+=input;
        
    }
    
    else if(evt.target.classList.contains('op')){
        // console.log("button was not clicked");
        operandOne=parseFloat(numberArea.innerText)
        console.log("operand one ="+operandOne);
        numberArea.innerText="";
        let input=evt.target.closest("div").innerText;
        operatorArea.innerText=input;
    }
    else if(evt.target.classList.contains('num') && operatorArea.innerText!==""){
            let input=evt.target.closest("div").innerText;
            numberArea.innerText+=input;
    }
    else if(evt.target.classList.contains('equal')){
        operandtwo=parseFloat(numberArea.innerText)
        console.log("operand two ="+operandtwo);
        numberArea.innerText="";
        switch(operatorArea.innerText){
            case '+' :  numberArea.innerText=operandOne+operandtwo;
            break;
            case '-' :  numberArea.innerText=operandOne-operandtwo;
            break;
            case '*' :  numberArea.innerText=operandOne*operandtwo;
            break;
            case '/' :  numberArea.innerText=operandOne/operandtwo;
            break;
            case '%' :  numberArea.innerText=operandOne%operandtwo;
            break;
            default :   numberArea.innerText="Sorry";
        }
        operatorArea.innerText="";
    }
        else if(evt.target.classList.contains('reset')){
            numberArea.innerText="";
            operatorArea.innerText="";
            operandOne="";
            operandtwo="";

        }
        else{
            // numberArea.innerText="";
            console.log("error occured");
        }
})