'use strict';

console.log('hola');


//DESIGN COLOR

const designTop = document.querySelector('.design--top');
const designBottom = document.querySelector('.design--bottom');
const inputColorPalette1 = document.querySelector('#color-option1');
const inputColorPalette2 = document.querySelector('#color-option2');
const inputColorPalette3 = document.querySelector('#color-option3');
const cardDecoration = document.querySelector('#image--preview_text');
const cardIcons = document.querySelector('#image--preview_icons');

function onClickDesignTop() {
    designBottom.classList.toggle('design--bottom--visible');
    designTop.classList.toggle('design--top--active');
}

function changePalette1() {
    cardDecoration.classList.add('color-palette1');
    cardIcons.classList.add('icon-palette1');
    cardDecoration.classList.remove('color-palette2');
    cardIcons.classList.remove('icon-palette2');
    cardDecoration.classList.remove('color-palette3');
    cardIcons.classList.remove('icon-palette3');
}

function changePalette2() {
    cardDecoration.classList.add('color-palette2');
    cardIcons.classList.add('icon-palette2');
    cardDecoration.classList.remove('color-palette1');
    cardIcons.classList.remove('icon-palette1');
    cardDecoration.classList.remove('color-palette3');
    cardIcons.classList.remove('icon-palette3');
}

function changePalette3() {
    cardDecoration.classList.add('color-palette3');
    cardIcons.classList.add('icon-palette3');
    cardDecoration.classList.remove('color-palette1');
    cardIcons.classList.remove('icon-palette1');
    cardDecoration.classList.remove('color-palette2');
    cardIcons.classList.remove('icon-palette2');
}


designTop.addEventListener('click', onClickDesignTop);
inputColorPalette1.addEventListener('change', changePalette1)
inputColorPalette2.addEventListener('change', changePalette2)
inputColorPalette3.addEventListener('change', changePalette3)



//DESIGN SCRIPT
const fillTop = document.querySelector('.fill--top');
const fillBottom = document.querySelector('.fill--bottom');

let inputName = document.querySelector('#firstName');
let inputJob = document.querySelector('#addjob');
let cardFullName = document.querySelector('.card--full_name');
let cardFullProfession = document.querySelector('.card--full_profession');

function onClickFillTop() {
    fillBottom.classList.toggle('fill--bottom--visible');
    fillTop.classList.toggle('fill--top--active');
}

function print(evt) {
    if (evt.currentTarget.name === 'firstName') {
        cardFullName.innerHTML = evt.currentTarget.value
    }
    if (evt.currentTarget.name === 'addjob') {
        cardFullProfession.innerHTML = evt.currentTarget.value
    }
};

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

function chosenInput() {
    return event.currentTarget;
}

function showIcon(event) {
    const finalInput = chosenInput();
    if (finalInput === FillInputPhone) {
        FillIconPhone.classList.remove('hidden--fill')
    } if (finalInput === FillInputEmail) {
        FillIconEmail.classList.remove('hidden--fill')
    } if (finalInput === FillInputLinkedin) {
        FillIconLinkedin.classList.remove('hidden--fill')
    } if (finalInput === FillInputGithub) {
        FillIconGithub.classList.remove('hidden--fill')
    }
}

fillTop.addEventListener('click', onClickFillTop);
inputName.addEventListener('keyup', print);
inputJob.addEventListener('keyup', print);
FillInputPhone.addEventListener('keypress', showIcon);
FillInputEmail.addEventListener('keypress', showIcon);
FillInputLinkedin.addEventListener('keypress', showIcon);
FillInputGithub.addEventListener('keypress', showIcon);

//DESING COMPARTE

const shareTop = document.querySelector('.share--top');
const shareBottom = document.querySelector('.share--bottom');
const createButton = document.querySelector('.create-card--button');
const createCardContainer = document.querySelector('.created-card--container');

function onClickShareTop() {
    shareBottom.classList.toggle('share--bottom--visible');
    shareTop.classList.toggle('share--top--active');
}

function onClickCreateButton() {
    createButton.classList.add('create-card--button--active');
    createCardContainer.classList.add('created-card--container--visible');
}

shareTop.addEventListener('click', onClickShareTop);
createButton.addEventListener('click', onClickCreateButton);

// Componente-de-foto-de-perfil-js/js/get-avatar.js

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento}
 */
function getImage(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  storedData.photo = fr.result;
  storeData();
  //localStorage.setItem('image', fr.result);
}


/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
 fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);