let hasBlackJack=false;
let isAlive=true;
let message="";
let getCardElement=document.getElementById("cardElement");
let getSumElement=document.getElementById("sumElement");
let getMessageElement=document.getElementById("message-el");
let getNewCardBtnElement=document.querySelector("#newCardBtn");
let cards=[];
let sum=0;
function startGame(){
    let x=Math.floor((Math.random()*10)+2);
    let y=Math.floor((Math.random()*10)+2);
    cards.push(x,y);
    sum=x+y;
    getCardElement.textContent="Cards: ";
    renderGame(sum);
    //cards.pop(x);
    //cards.pop(y);
}
function renderGame(s){
    for(let i=0;i<cards.length;i++){
        getCardElement.textContent+=" "+cards[i]+" ";
    }
//getCardElement.textContent="Cards: "+cards[0]+" "+cards[1];
getSumElement.textContent="Sum: "+s;
if (s<=20){
    message=("Do you want to draw a new card?")
}else if(s===21){
    message=("wohoo BLACK JACK")
    hasBlackJack=true;
    
}
else{
    message=("Out of the game!")
    isAlive=false;
    //getNewCardBtnElement.remove();

}
getMessageElement.textContent=message
// Cashout:
console.log(sum);

console.log(cards);
}

function DrawNewCard(){
    let z=Math.floor((Math.random()*10)+2);
    sum+=z;
    //getCardElement.textContent="Cards:"+x+"and"+y+"and"+z;
    //getSumElement.textContent="Sum:"+sum;
    cards.push(z);
    getCardElement.textContent="Cards: ";
    console.log(cards);
    renderGame(sum);
    cards.pop(z);
}