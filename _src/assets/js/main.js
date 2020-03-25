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

function printName() {
    cardFullName.innerHTML = inputName.value;
  }

function printJob() {
      cardFullProfession.innerHTML = inputJob.value;
  }

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


function showIconPhone() {
    if (FillInputPhone.value !== '') {
      FillIconPhone.classList.remove('hidden--fill');
    }else{
      FillIconPhone.classList.add('hidden--fill');
    }
  }
    
  function showIconEmail() {
    if (FillInputEmail.value !== '') {
      FillIconEmail.classList.remove('hidden--fill')
    }else{
      FillIconEmail.classList.add('hidden--fill')
    }
  }
  
  function showIconLinkedin() {
    if (FillInputLinkedin.value !== '') {
      FillIconLinkedin.classList.remove('hidden--fill')
    }else{
      FillIconLinkedin.classList.add('hidden--fill')
    }
  }
  
  function showIconGithub() {
    if (FillInputGithub.value !== '') {
        
      FillIconGithub.classList.remove('hidden--fill')
    }else{
      FillIconGithub.classList.add('hidden--fill')
    }
  }

  fillTop.addEventListener('click', onClickFillTop);
  inputName.addEventListener('keyup', printName);
  inputJob.addEventListener('keyup', printJob);
  FillInputPhone.addEventListener('keypress', showIconPhone);
  FillInputEmail.addEventListener('keypress', showIconEmail);
  FillInputLinkedin.addEventListener('keypress', showIconLinkedin);
  FillInputGithub.addEventListener('keypress', showIconGithub);

// FILL AND ERRORS 
//BUTTON DISABLE

const textErrorAll = document.querySelectorAll('.text-error');
const inputFill = document.querySelectorAll('.input-fill');
const fillForm = document.querySelectorAll('.fillform');
const createButton = document.querySelector('.create-card--button');

const nameError = document.querySelector('#text-error_name');
const jobError = document.querySelector('#text-error_job');
const linkedInError = document.querySelector('#text-error_linkedin');
const gitHubError = document.querySelector('#text-error_git');
const emailError = document.querySelector('#text-error_email')

const imageError = document.querySelector('#text-error_image');
const inputImage = document.querySelector('#add-image');

const inputValidation = document.querySelectorAll('.input-validation')

const globalError = document.querySelector('#global-error');


function validateForm() {
  for (let myInput of inputFill) {
    if (myInput.value !== "") {
      myInput.classList.remove("input-error");
      nameError.classList.add("input-correct");

    } else {
      myInput.classList.remove("input-correct");
      myInput.classList.add("input-error");

    };
  }
}

/*function validateText() {
  for (let myInput of textErrorAll) {
    if (FillInputEmail !== '') {
      myInput.classList.add('hidden')
    } else {
      myInput.classList.remove('hidden')
    }
  }
}
*/

function validateName() {
  if (inputName.value === '') {
    nameError.classList.remove('hidden');
    return (false);
  } else {
    nameError.classList.add('hidden');
    return (true);
  }
}

function validateJob() {
  if (inputJob.value === '') {
    jobError.classList.remove('hidden');
    return (false);
  } else {
    jobError.classList.add('hidden');
    return (true);
  }
}


function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(FillInputEmail.value)) {
    emailError.classList.add('hidden');
    return (true);
  } else {
    emailError.classList.remove('hidden');
    return (false);
  }
}


function validateLinkedin() {

  if (FillInputLinkedin.value === '') {
    linkedInError.classList.remove('hidden');
    return (false);
  } else {
    linkedInError.classList.add('hidden');
    return (true);
  }
}

function validateGithub() {
  if (FillInputGithub.value === '') {
    gitHubError.classList.remove('hidden');
    return (false);
  } else {
    gitHubError.classList.add('hidden');
    return (true);
  }
}

const imageInput = document.querySelector('#image-input');

function validateImage() {
    const imageError = document.querySelector('#text-error_image');
    //const localStoredData = JSON.parse(localStorage.getItem('Details'));
    if (/.(gif|jpeg|jpg|png)$/i.test(imageInput.value) !== ''){
        imageError.classList.remove('hidden');
        return (true);
    } else {
        imageError.classList.add('hidden');
        return (false);
    }
}
imageInput.addEventListener('change', validateImage);


// VA JUSTO DESPUES DE (imageInput.value)|| localStoredData.photo !== '')

function disabledButton() {
  createButton.disabled = true;
  createButton.classList.add('create-card--button--active');

}

disabledButton()

function noDisableButton(event) {
  //event.preventDefault()
  createButton.disabled = false;
  createButton.classList.remove('create-card--button--active');
 
}

createButton.addEventListener('click', onClickCreateButton);

function validateAll() {
  if (validateJob() === true && validateName() === true && validateEmail() === true && validateLinkedin() === true && validateGithub() === true) {
    globalError.classList.add('hidden');
    noDisableButton();
    return true;

  } else {
    globalError.classList.remove('hidden');

    validateForm()
    validateJob();
    validateName();
    validateEmail();
    validateLinkedin();
    validateGithub();
    disabledButton();
    validateImage();
    return false;
  }

};


// inputValidation.addEventListener('keyup', validateAll);
//createButton.addEventListener('click', validateAll);
console.log('inputValidation', inputValidation);
for (var i = 0; i < inputValidation.length; i++) {
  inputValidation[i].addEventListener('keyup', validateAll);
}


//DESING COMPARTE

const shareTop = document.querySelector('.share--top');
const shareBottom = document.querySelector('.share--bottom');
const createCardContainer = document.querySelector('.created-card--container');

function onClickShareTop() {
  shareBottom.classList.toggle('share--bottom--visible');
  shareTop.classList.toggle('share--top--active');
}

function onClickCreateButton() {
  // createButton.classList.add('create-card--button--active');
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

function reset(){
    localStorage.removeItem('Details');
    inputName.value = '';
    inputJob.value = '';
    FillInputEmail.value = '';
    FillInputPhone.value = '';
    FillInputLinkedin.value = '';
    FillInputGithub.value = '';
    cardFullName.innerHTML = 'Nombre Apellidos';
    cardFullProfession.innerHTML = 'Front-end developer';
    inputColorPalette1.checked = true;
    //const imageUrl = './assets/images/profile-picture.gif';
    //profileImage.style.backgroundImage = `url(${imageUrl})`;
    //profilePreview.style.backgroundImage = `url(${imageUrl})`;
    
    changePalette1();
    showIconPhone();
    showIconEmail();
    showIconLinkedin();
    showIconGithub();
    setTheme();
    validateForm();
    chosenInput();
    //cardShare.classList.add('hidden');
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
fileField.addEventListener('change', getImage);


///////////////////////////////////////////////////////////////////////////////////////// MERGE LOCAL STORAGE //LOCAL STORAGE

//const inputImage = document.querySelector('#image-input');

let palette1Value = inputColorPalette1.value;
let palette2Value = inputColorPalette2.value;
let palette3Value = inputColorPalette3.value;

let nameValue = inputName.value;
let jobValue = inputJob.value;
//let imageSource = inputImage.scr;
let telfValue = FillInputPhone.value;
let emailValue = FillInputEmail.value;
let linkedinValue = FillInputLinkedin.value;
let githubValue = FillInputGithub.value;

let localInfo = { //storedData
    palette: '',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
}

function storePalette(){
    if(inputColorPalette2.checked){
        localInfo.palette = inputColorPalette2.value;
        console.log(localInfo);
    } else if (inputColorPalette3.checked){
        localInfo.palette = inputColorPalette3.value;
        console.log(localInfo);
    }  else {
        localInfo.palette = inputColorPalette1.value;
        console.log(localInfo);
    }
    storeData();
}

function storeFullName(){
    localInfo.name = inputName.value;
    storeData();   
}
function storeJob(){
    localInfo.job = inputJob.value;
    storeData();
}
function storeEmail(){
    localInfo.email = FillInputEmail.value;
    storeData();
}
function storeTelf(){
    localInfo.phone = FillInputPhone.value;
    storeData();
}
function storeLinkedin(){
    localInfo.linkedin = FillInputLinkedin.value;
    storeData();
}
function storeGithub(){
    localInfo.github = FillInputGithub.value;
    storeData();
}
function storeData(){
    localStorage.setItem('Details', JSON.stringify(localInfo));
}


// function storeImage(){
//     localInfo.image = inputImage.value;
//     storeData();
// }

function checkLocalStorage (){
    if (localStorage.getItem('Details')!== null){
        retrieveData();
        init();
    }
}

function retrieveData(){
    localInfo = JSON.parse(localStorage.getItem('Details'));
    
    if(localInfo.palette !== undefined){
        if(localInfo.palette === inputColorPalette2.value){
            inputColorPalette2.checked = true;
            inputColorPalette1.checked = false;
            inputColorPalette3.checked = false
        } else if(localInfo.palette === inputColorPalette3.value){
            inputColorPalette3.checked = true;
            inputColorPalette2.checked = false;
            inputColorPalette1.checked = false
        } else{
            inputColorPalette3.checked = false;
            inputColorPalette2.checked = false;
            inputColorPalette1.checked = true;
        }
    }
    if (localInfo.name !== ''){
        inputName.value = localInfo.name;
    }
    if (localInfo.job !== ''){
        inputJob.value = localInfo.job;
    }
    if (localInfo.email !== ''){
        FillInputEmail.value = localInfo.email;
    }
    if (localInfo.phone !== ''){
        FillInputPhone.value= localInfo.phone;
    }
    if (localInfo.linkedin !== ''){
        FillInputLinkedin.value = localInfo.linkedin;
    }
    if (localInfo.github !== ''){
        FillInputGithub.value = localInfo.github;
    }
}

function setTheme(){
    if(inputColorPalette2.checked){
        changePalette2();
    } else if(inputColorPalette3.checked){
        changePalette3();
    } else {
        changePalette1();
    }
}

//function setImage(){
  //  if (localInfo.photo !== ''){
    //    profileImage.style.backgroundImage = `url(${localInfo.photo})`;
    //    profilePreview.style.backgroundImage = `url(${storedData.photo})`;
    //}
//}

function init(){
    if(inputName.value === ''){
        cardFullName.innerHTML = 'Nombre Apellidos';
    } else {
        printName();
    }
    if(inputJob.value === ''){
        cardFullProfession.innerHTML = 'Front-end developer';
    } else { 
        printJob();
    }
    showIconLinkedin();
    showIconGithub();
    showIconPhone();
    showIconEmail();
    setTheme();
    //setImage();
}

/// CARDSHARE A QUE SE REFIERE

window.addEventListener('load', checkLocalStorage);
inputColorPalette1.addEventListener('click', storePalette);
inputColorPalette2.addEventListener('click', storePalette);
inputColorPalette3.addEventListener('click', storePalette);
inputName.addEventListener('change', storeFullName);
inputJob.addEventListener('change', storeJob);
FillInputEmail.addEventListener('change', storeEmail);
FillInputPhone.addEventListener('change', storeTelf);
FillInputLinkedin.addEventListener('change', storeLinkedin);
FillInputGithub.addEventListener('change', storeGithub);
//btnReset.addEventListener('click', reset);


const urlBase = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';
//const cardLink = document.querySelector('#card-link');
//let photoSend = '';

function sendData() {

    fetch(urlBase, {
        method: 'POST',
        body: localStorage.getItem('Details'),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => showURL(data))
        .catch(function (error) { console.log(error) })

    shareLink(event);
}

function showURL(result){
    if(result.success){
      responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    }else{
      responseURL.innerHTML = 'ERROR:' + result.error;
    }
  }

