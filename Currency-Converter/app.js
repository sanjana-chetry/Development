<<<<<<< HEAD
const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const mssg = document.querySelector(".mssg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCurr.value}`;
  const response = await fetch(URL);
  const data = await response.json();

  const rate = data.rates[toCurr.value];
  const finalAmount = (amtVal * rate).toFixed(4);

  mssg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});
=======
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newGameBtn=document.querySelector("#new_btn");
let mssgContainer=document.querySelector(".mssg_container");
let mssg=document.querySelector("#mssg");
let turn0=true;

const winPatterns=[
                   [0,1,2],
                   [0,3,6],
                   [0,4,8],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5],
                   [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBox();
    mssgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disableBox=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}
const showWinner =(winner)=>{
    mssg.innerText=`Congratulations! Winner is ${winner}`;
    mssgContainer.classList.remove("hide");
    disableBox();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }

    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)
>>>>>>> 60487857ea93c5bc0de9d693087a6c5cd42992fe
