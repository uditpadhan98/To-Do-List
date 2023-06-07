const erase=document.querySelector("#eraser");

const item=document.querySelector("#Item");
const user=document.querySelector("#user");


erase.addEventListener("click",()=>{
  item.textContent="";
  localStorage.clear();
})

// const itemArray=[];
let i=0;
user.addEventListener("keydown",(event)=>{
  if(event.key=="Enter")
  {
    // itemArray.push(user.value);
    localStorage.setItem(`item${i}`,JSON.stringify(user.value));  
    i++;  
    // localStorage.getItem('item')?JSON.parse(localStorage.getItem('item')):[];
    addItem();
  }
});
let j=0;
addItem=()=>{
  let item=document.createElement("h2")
  const data=JSON.parse(localStorage.getItem(`item${j}`));
  j++;
  item.textContent=":) "+data;
  // for(let i=0;i<itemArray.length;i++){
  // }
  
  item.addEventListener("click",()=>{
    if(item.style.textDecoration!="line-through")
    item.style.textDecoration="line-through";
    else
    item.style.textDecoration="none";
  })
  
  document.querySelector("#Item").appendChild(item);
  document.querySelector("#user").value = "";
    
}

