let input= document.getElementById('input');
let btn= document.querySelectorAll('button');
// let eq= document.getElementById('eq');

let string ='';

let btnarr=  Array.from(btn);
// console.log(btnarr);
 
    btnarr.forEach( elem =>{
    // console.log(elem);
    elem.addEventListener('click', (e) => {
      // console.log(e.target.innerHTML );
       if(e.target.innerText == 'C')
       {
        string = string.substring(0, string.length -1);
        console.log(e.target.innerHTML );
        input.value = string;
       }
       else if (e.target.innerText =='AC')
       {
          string = '';
          input.value = string;

       }
       else if(e.target.innerText == '=')
       {
        string = eval(string);
        input.value = string; 

       }
        else{
        string += e.target.innerText;
        input.value = string;
       }

        
      });
    
  });
  

 
  



