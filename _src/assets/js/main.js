'use strict';

console.log('hola'); 

// DESGIN FILL

const FillIconPhone = document.querySelector('#icon1');
const FillIconEmail = document.querySelector('#icon2');
const FillIconLinkedin = document.querySelector('#icon3');
const FillIconGithub = document.querySelector('#icon4');
const FillInputPhone = document.querySelector('#addphone');
const FillInputEmail = document.querySelector('#addemail');
const FillInputLinkedin = document.querySelector('#addlinkedin');
const FillInputGithub = document.querySelector('#addgithub');
const FillButtonClose = document.querySelector('.fill--buttton');
const FillFormBottom = document.querySelector('.fill--bottom');

function chosenInput(){
    return event.currentTarget;
}

function showIcon(event){
const finalInput = chosenInput();
if (finalInput===FillInputPhone){
    FillIconPhone.classList.remove('hidden--fill')
}if (finalInput===FillInputEmail){
    FillIconEmail.classList.remove('hidden--fill')
}if (finalInput===FillInputLinkedin){
    FillIconLinkedin.classList.remove('hidden--fill')
}if(finalInput===FillInputGithub){
    FillIconGithub.classList.remove('hidden--fill')
    }
}

FillInputPhone.addEventListener('keypress', showIcon);
FillInputEmail.addEventListener('keypress', showIcon);
FillInputLinkedin.addEventListener('keypress', showIcon);
FillInputGithub.addEventListener('keypress', showIcon);

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
