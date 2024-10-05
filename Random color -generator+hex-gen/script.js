const pn=document.querySelector(".pn");
const bt1=document.querySelector(".bt1");
const con1=document.querySelector(".con1");



bt1.addEventListener("click", ()=>{
   let charset="0123456789ABCDEF"
   let ct="";
   for(let i=0,chlength=charset.length;i<6;++i){
    ct +=charset.charAt(Math.floor(Math.random()*chlength));
   }

   con1.style.backgroundColor=`#${ct}`;
    pn.textContent=`#${ct}`;
    
})



// now 2 block -->ranged one---




const red=document.querySelector("#red");
const green=document.querySelector("#green");
const blue=document.querySelector("#blue");
const hh=document.querySelector("#hh");
const con2=document.querySelector(".con2");
const bt2=document.querySelector(".bt2");


bt2.addEventListener("click",()=>{
    let red_v=red.value;
    let green_v=green.value;
    let blue_v=blue.value;
hh.textContent=`rgb(${red_v} ${green_v} ${blue_v})`

   con2.style.backgroundColor=`rgb(${red_v} ${green_v} ${blue_v})`;

})


console.log("hi" + pn.textContent);