
let x=Math.floor((Math.random()*10)+2);
let y=Math.floor((Math.random()*10)+2);
let sum=x+y;
console.log(x +" |"+ y+"sum:"+sum);
let hasBlackJack=false;

if (sum<=20){
    console.log("Do you want to draw a new card?")
}else if(sum===21){
    console.log("wohoo BLACK JACK")
    hasBlackJack=true;
}
else{
    console.log("Out of the game!")
}
// Cashout:
console.log(hasBlackJack);