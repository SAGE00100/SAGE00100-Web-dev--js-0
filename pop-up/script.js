const card = document.querySelector('.card')
const button = document.querySelector('.wem')
const cut = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')

button.addEventListener('click', () => {
    card.classList.add('open')
})

cut.addEventListener('click', ()=> {
    card.classList.remove('open')
})
overlay.addEventListener('click', () => {
    
        card.classList.remove('open')
   
    
})