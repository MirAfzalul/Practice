const inputBtn=document.getElementById("input-btn");
let myLeads =[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");
//console.log(inputEl);

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    console.log(myLeads);
    //ulEl.textContent=myLeads+"\n";
   renderLeads();
})
function renderLeads(){
    let listItems="";
    for(let i=0;i<myLeads.length;i++){
        listItems+="<li>"+myLeads[i]+"</li>";
    }
    ulEl.innerHTML=listItems;
    
}
//console.log(myLeads);
