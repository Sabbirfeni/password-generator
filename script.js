const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const specialCharEl = document.getElementById('specialChar');
const generateBtnEl = document.getElementById('generateBtn');
const toast = document.querySelector('.toast');

const upperLetter = 'ABCDEFGHIJKLMNOPQURSTWXYZ';
const lowerLetter = 'abcdefghijklmnopqurstwxyz';
const numbers = '0123456789';
const specialCharacter = '!@#$%^&*()_+';

generateBtnEl.addEventListener('click', generatePassword);

function generatePassword() {
    let passLength = lengthEl.value;
    let password = '';

    if(!uppercaseEl.checked && !lowercaseEl.checked && !numberEl.checked && !specialCharEl.checked) {
        generateToast('Please select at least one type.')
    }

    if(uppercaseEl.checked) {
        password += generateUppercase();
    }
    if(lowercaseEl.checked) {
        password += generateLowercase();
    }
    if(numberEl.checked) {
        password += generateNumbers();
    }
    if(specialCharEl.checked) {
        password += generateSpecialChar();
    }

    for(let i = password.length; i < passLength; i++) {
        password += getSingleCharacter();
    }

    passwordEl.value = password;
}

function getSingleCharacter() {
    let tempNum = '';
    if(uppercaseEl.checked) {
        tempNum += generateUppercase();
    }
    if(lowercaseEl.checked) {
        tempNum += generateLowercase();
    }
    if(numberEl.checked) {
        tempNum += generateNumbers();
    }
    if(specialCharEl.checked) {
        tempNum += generateSpecialChar();
    }

    if(tempNum === '') return '';

    return tempNum[Math.floor(Math.random() * tempNum.length)];
}

document.querySelector('#copyPasswordBtn').addEventListener('click', copyToClipboard);

function generateUppercase() {
    return upperLetter[Math.floor(Math.random() * upperLetter.length)];
}
function generateLowercase() {
    return lowerLetter[Math.floor(Math.random() * lowerLetter.length)];
}
function generateNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function generateSpecialChar() {
    return specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
}
function copyToClipboard() {
    if(passwordEl.value == 0){
        generateToast('Please generate a password.')
    };
    var copyText = document.getElementById("password");
    if(copyText.value == 0) {
        return;
    }
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    generateToast('Password copied.')
  }

function generateToast(meassage) {
    toast.innerText = meassage;
    toast.classList.add('active')
    setTimeout(() => {
        toast.classList.remove('active')
    }, 2500);
}