let input= document.getElementById("input");
let img= document.getElementById("image");
let button= document.getElementById("button");

console.log(button ,img ,input);

button.addEventListener('click', () => {
    let value = input.value;
    

    if(!value)
    {
        alert('Please enter a valid URL!!!!');
        return;
     
    }
    else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
        img.alt=`QR-code for ${value}`;

    }

});