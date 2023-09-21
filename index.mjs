const form = document.querySelector(".numForm");
const range = document.querySelector(".rangeInput");
const inputNum = form.querySelector(".inputNum");
const paintChose = document.querySelector(".paintChose");
const paintResult = document.querySelector(".paintResult");

function result(myNum, randNum){
    paintChose.innerText=`You chose: ${myNum}, the machine chose: ${randNum}.`;
    myNum = parseInt(myNum);
    if(myNum > range.value || myNum < 0){
      paintResult.innerText =`wrong number.`;
    }
    else if (myNum === randNum){ 
        paintResult.innerText=`You won!`;
    }
    else{
        paintResult.innerText=`You lost!`;
    }
}

function makeRandNum(event){
    event.preventDefault();
    const myNum = inputNum.value;
    const maxValue = range.value;
    const randNum = Math.ceil(Math.random() * maxValue);

   result(myNum, randNum);
}

function handleInput(){
    const maxNumValue = range.value;
    if(maxNumValue <= 0){
      alert("wrong range number");
      range.value = "";
    }else{
      form.addEventListener("submit", makeRandNum);
    }
}

function init(){
    range.oninput = handleInput;
}
init();