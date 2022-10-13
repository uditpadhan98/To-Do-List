const erase=document.querySelector("#eraser");
const item=document.querySelector("#Item");
const user=document.querySelector("#user");

erase.addEventListener("click",()=>{
    item.textContent="";
})
  
user.addEventListener("keydown",(event)=>{
    if(event.key=="Enter")
      addItem();
});
  
addItem=()=>{
    const item=document.createElement("h2")
    item.textContent=":) "+user.value;
  
    item.addEventListener("click",()=>{
      if(item.style.textDecoration!="line-through")
        item.style.textDecoration="line-through";
      else
        item.style.textDecoration="none";
    })
  
    document.querySelector("#Item").appendChild(item);
    document.querySelector("#user").value = "";
}