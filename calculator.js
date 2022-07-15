//const containerEl=document.querySelector('.container')
//const inputEl=document.querySelector('.inputtext')
const keys = document.querySelectorAll("button");
const caculateEl = document.querySelectorAll(".calculator");
const displayEl = document.querySelector(".output");
const result = document.querySelector(".result");
const container = document.querySelector(".display");

keys.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerText;
  function division(){
    result.innerText = displayEl.innerText/displayEl.innerText
  }
  //displayEl.textContent += buttonText;
  if(buttonText==='AC'){
    displayEl.innerText='';
    result.innerText='';
    return;

  }
  

    //console.log('hi');
  
  if (buttonText === "=") {
    // console.log('hi');
     result.textContent= eval(displayEl.innerText);
    return;
  }
   if(buttonText==='%'){
     
     result.textContent=(displayEl.innerText/100)
   
   }
   else{
  displayEl.textContent += buttonText;
  }
  
  
}
