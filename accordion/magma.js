const buttons=document.querySelectorAll(".button");
const cos=document.querySelectorAll(".co");
const butttons =Array.from(buttons)
const co=Array.from(cos);

const c1=co[0];
const c2=co[1];
const c3=co[2];


butttons.forEach(function(en){
    en.addEventListener("click" , (e)=>{
        en.parentElement.nextElementSibling.classList.toggle("co");
      
       
        
    })

})
