'use strict';

console.log('hola que tal')

const inputColorPalette1 = document.querySelector('#color-option1')
const inputColorPalette2 = document.querySelector('#color-option2')
const inputColorPalette3 = document.querySelector('#color-option3')

const cardDecoration = document.querySelector('#image--preview_text')
const cardIcons = document.querySelector('#image--preview_icons')


function changePalette1(){
    cardDecoration.classList.add('color-palette1');
    cardIcons.classList.add('icon-palette1');
    cardDecoration.classList.remove('color-palette2');
    cardIcons.classList.remove('icon-palette2');
    cardDecoration.classList.remove('color-palette3');
    cardIcons.classList.remove('icon-palette3');
    }



function changePalette2(){
    cardDecoration.classList.add('color-palette2');
    cardIcons.classList.add('icon-palette2');
    cardDecoration.classList.remove('color-palette1');
    cardIcons.classList.remove('icon-palette1');
    cardDecoration.classList.remove('color-palette3');
    cardIcons.classList.remove('icon-palette3');
    }




function changePalette3(){
    cardDecoration.classList.add('color-palette3');
    cardIcons.classList.add('icon-palette3');
    cardDecoration.classList.remove('color-palette1');
    cardIcons.classList.remove('icon-palette1');
    cardDecoration.classList.remove('color-palette2');
    cardIcons.classList.remove('icon-palette2');
    }



inputColorPalette1.addEventListener('change', changePalette1)
inputColorPalette2.addEventListener('change', changePalette2)
inputColorPalette3.addEventListener('change', changePalette3)



//function changePalette(){
//    if(inputColorPalette1){ 
//        cardDecoration.classList.add('color-palette1');
//        cardDecoration.classList.remove('color-palette2');
//        cardDecoration.classList.remove('color-palette3');
//    }

//    if(inputColorPalette2){ 
//        cardDecoration.classList.add('color-palette2');
//        cardDecoration.classList.remove('color-palette1');
//        cardDecoration.classList.remove('color-palette3');
//    }

//    if(inputColorPalette3){ 
//        cardDecoration.classList.add('color-palette3');
//        cardDecoration.classList.remove('color-palette1');
//        cardDecoration.classList.remove('color-palette2');
//    }
//}       

