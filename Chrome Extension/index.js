const inputBtn=document.getElementById("input-btn");
let myLeads =[];
const inputEl=document.querySelector("#input-el");
const ulEl=document.querySelector("#ul-el");
const deleteEl=document.querySelector("#delete-btn");
const saveTabEl=document.querySelector("#saveTb-btn");
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
}
saveTabEl.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);   
    });
     
});

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        listItems+=`
        <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}
            </a>
        </li>`;
    }
    ulEl.innerHTML=listItems;
    
}
deleteEl.addEventListener("click",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
});
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
   inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);   
});



