'use strict';

console.log('hola');


//DESIGN COLOR

const designTop = document.querySelector('.design--top');
const designBottom = document.querySelector('.design--bottom');
const inputColorPalette1 = document.querySelector('#color-option1')
const inputColorPalette2 = document.querySelector('#color-option2')
const inputColorPalette3 = document.querySelector('#color-option3')
const cardDecoration = document.querySelector('#image--preview_text')
const cardIcons = document.querySelector('#image--preview_icons')

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
let FillInputPhone = document.querySelector('#addphone');
const FillInputEmail = document.querySelector('#addemail');
let FillInputLinkedin = document.querySelector('#addlinkedin');
let FillInputGithub = document.querySelector('#addgithub');
const FillButtonClose = document.querySelector('.fill--buttton');
const FillFormBottom = document.querySelector('.fill--bottom');

function chosenInput() {
  return event.currentTarget;
}

function showIcon(event) {
  const finalInput = chosenInput();
  if (finalInput === FillInputPhone) {
    FillIconPhone.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputEmail) {
    FillIconEmail.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputLinkedin) {
    FillIconLinkedin.classList.remove('hidden--fill')
  }
  if (finalInput === FillInputGithub) {
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


// FILL AND ERRORS

const textErrorAll = document.querySelectorAll('.text-error');
const inputFill = document.querySelectorAll('.input-fill');
const fillForm = document.querySelectorAll('.fillform');
const createButton = document.querySelector('.create-card--button');

const nameError = document.querySelector('#text-error_name');
const jobError = document.querySelector('#text-error_job');
const linkedInError = document.querySelector('#text-error_linkedin');
const gitHubError = document.querySelector('#text-error_git');
const emailError = document.querySelector('.text-error_email')

    function validateForm(){  
     for(let myInput of inputFill){
        if(myInput.value !==""){
        myInput.classList.remove("input-error");
        myInput.classList.add("input-correct");
        }else{
        myInput.classList.remove("input-correct");
        myInput.classList.add("input-error");
        }   
        validateText();  
    }
    }

    

    function validateText(){
        if(FillInputEmail !== ''){
            emailError.classList.add('hidden')
        }else{
            emailError.classList.remove('hidden')
        }
    }


createButton.addEventListener('click', validateForm);

//STORE INPUT INFORMATION // HAY QUE DEFINIR LA FUNCIÓN

function storeFullName() {
    storedData.name = inputName.value, storeData()
  }
function storeJob() {
    storedData.job = inputJob.value, storeData()
  }
function storeEmail() {
   storedData.email = FillInputEmail.value, storeData()
}
function storeTelf() {
    storedData.phone = FillInputPhone.value, storeData()
  }
function storeLinkedin() {
   storedData.linkedin = FillInputLinkedin.value, storeData()
}
function storeGithub() {
    storedData.github = FillInputGithub.value, storeData()
  }

//DESING COMPARTE

const shareTop = document.querySelector('.share--top');
const shareBottom = document.querySelector('.share--bottom');
const createCardContainer = document.querySelector('.created-card--container');// aquí no se estaba llamando a la clase//


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

//TWITTER BUTTON
const twitterButton = document.querySelector('.twitter--button');
const twitterLink = document.querySelector('.twitter--link');
const createCardLink = document.querySelector('.created-card--link');
twitterLink.setAttribute('href',`https://twitter.com/intent/tweet?text=${createCardLink.innerText}`);
twitterLink.setAttribute('target',"blank");



// RESET BUTTON
const resetButton = document.querySelector('.button--preview');

function reset() {
  
  inputName.value = '';
  inputJob.value = '';
  FillInputPhone.value = '';
  FillInputEmail.value = '';
  FillInputGithub.value ='';
  FillInputLinkedin.value='';
  cardFullName.innerHTML = 'Nombre Apellidos';
  cardFullProfession.innerHTML = 'Front-end developer';
  
    FillIconPhone.classList.add('hidden--fill');
    FillIconEmail.classList.add('hidden--fill');
    FillIconLinkedin.classList.add('hidden--fill');
    FillIconGithub.classList.add('hidden--fill');

  changePalette1();
  showIcon(event) ;
  chosenInput();
}


resetButton.addEventListener('click', reset);

//js-avatar:

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
 * @param {evento} e 
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