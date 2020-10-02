// Selecting the Elements

let foodBtn = document.getElementById('food-btn');

let overLay = document.getElementById('overlay')

foodBtn.addEventListener('click',function(){
    // We are manipulating the DOM from none to grid
    overLay.style.display = 'grid';
    overLay.classList.add('animate-overlay');
})