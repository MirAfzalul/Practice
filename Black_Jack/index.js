let hasBlackJack=false;
let isAlive=true;
let message="";
let getCardElement=document.getElementById("cardElement");
let getSumElement=document.getElementById("sumElement");
let getMessageElement=document.getElementById("message-el");
let getNewCardElement=document.querySelector("#newCardBtn");

let x=Math.floor((Math.random()*10)+2);
let y=Math.floor((Math.random()*10)+2);
let z=Math.floor((Math.random()*10)+2);
let cards=[x,y,z];
let sum=x+y;
function startGame(){
    renderGame();
}
function renderGame(){
getCardElement.textContent="Cards: "+cards[0]+" "+cards[1];
getSumElement.textContent="Sum: "+sum;
if (sum<=20){
    message=("Do you want to draw a new card?")
}else if(sum===21){
    message=("wohoo BLACK JACK")
    hasBlackJack=true;
}
else{
    message=("Out of the game!")
    isAlive=false;
}
getMessageElement.textContent=message
// Cashout:
console.log(sum);
}

function DrawNewCard(){
    sum+=z;
    //getCardElement.textContent="Cards:"+x+"and"+y+"and"+z;
    //getSumElement.textContent="Sum:"+sum;
    renderGame();
}