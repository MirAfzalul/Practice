const inputBtn=document.getElementById("input-btn");
let myLeads =[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");
//console.log(inputEl);
localStorage.clear();
//myLeads=JSON.parse(myLeads);;
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
//let checkLeadStorage= Boolean(leadsFromLocalStorage);
console.log(leadsFromLocalStorage);
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads();
}
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    //console.log(myLeads);
    //ulEl.textContent=myLeads+"\n";
   inputEl.value="";
localStorage.setItem("myLeads",JSON.stringify(myLeads));
//let storeNames=JSON.parse(localStorage.getItem("myLeads"))
   
    renderLeads();
   
})
function renderLeads(){
    let listItems="";
    for(let i=0;i<myLeads.length;i++){
        listItems+=`
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}
            </a>
        </li>`;
    }
    //console.log(listItems);
    ulEl.innerHTML=listItems;
    
}
//console.log(myLeads);
