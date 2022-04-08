let hasBlackJack=false;
let isAlive=false;
let message="";
let getCardElement=document.getElementById("cardElement");
let getSumElement=document.getElementById("sumElement");
let getMessageElement=document.getElementById("message-el");
let getNewCardBtnElement=document.querySelector("#newCardBtn");
let cards=[];
let x,y,zsum=0,countRound=0;
let player={
        name:"Asif",
        chips:"$250"
}

document.getElementById("playerElement").textContent=player.name+": "+player.chips;
function startGame(){
    card=[];
    isAlive=true;
    x=Math.floor((Math.random()*10)+2);
    y=Math.floor((Math.random()*10)+2);
    cards=[x,y];
    sum=x+y;
    getCardElement.textContent="Cards: ";
    renderGame();
  //  cards.pop(x);
    //cards.pop(y);
    countRound++;
    console.log(countRound);
}
function renderGame(){
    for(let i=0;i<cards.length;i++){
        getCardElement.textContent+=" "+cards[i]+" ";
    }
//getCardElement.textContent="Cards: "+cards[0]+" "+cards[1];
getSumElement.textContent="Sum: "+sum;
if (sum<=20){
    message=("Do you want to draw a new card?")
    //document.getElementById("startBtn").textContent="Restart";
}else if(sum===21){
    message=("wohoo BLACK JACK")
    hasBlackJack=true;
    
}
else{
    message=("Out of the game!")
    isAlive=false;
    //getNewCardBtnElement.style.visibility='hidden';

}
getMessageElement.textContent=message
// Cashout:
console.log(sum);

console.log(cards);
}

function DrawNewCard(){
    if(isAlive===true && hasBlackJack===false){
    z=Math.floor((Math.random()*10)+2);
    sum+=z;
    //getCardElement.textContent="Cards:"+x+"and"+y+"and"+z;
    //getSumElement.textContent="Sum:"+sum;
    cards.push(z);
    getCardElement.textContent="Cards: ";
    console.log(cards);
    renderGame();
    //cards.pop(z);
    }
}