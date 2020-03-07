'use strict';

console.log('>> Ready :)');

// DESIGN 


//DESIGN RELLENA NAME JOB


// DESING RELLENA ICONOS


//DESING COMPARTE
const shareTop= document.querySelector('.share--top');
const shareBottom= document.querySelector('.share--bottom');

function onClickShareTop(){
    shareBottom.classList.toggle('share--bottom--visible');
    shareTop.classList.toggle('share--top--active');
}

shareTop.addEventListener('click', onClickShareTop);