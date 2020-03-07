'use strict';

console.log('>> Ready :)');

// DESIGN 


//DESIGN RELLENA NAME JOB


// DESING RELLENA ICONOS


//DESING COMPARTE
const shareTop = document.querySelector('.share--top');
const shareBottom = document.querySelector('.share--bottom');
const createButton = document.querySelector('.create-card--button');
const createCardContainer = document.querySelector('.created-card--container');

function onClickShareTop(){
    shareBottom.classList.toggle('share--bottom--visible');
    shareTop.classList.toggle('share--top--active');
}

function onClickCreateButton(){
    createButton.classList.add('create-card--button--active');
    createCardContainer.classList.add('created-card--container--visible');
}

shareTop.addEventListener('click', onClickShareTop);
createButton.addEventListener('click', onClickCreateButton);