const lowerCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const upperCaseChar = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()_+=-[]{};':;"<>,./?`;

const passWord = document.querySelector(".Password");
const btn = document.querySelector(".btn");
const length = document.querySelector("#Password-length");
const lowerCaseElements = document.querySelector("#lowercase");
const upperCaseElements = document.querySelector("#uppercase");
const numberElements = document.querySelector("#Numbers");
const symbolElements = document.querySelector("#Symbols");

const showpassWord = (password) => {
    passWord.value = password;
}

const generatePassword = () => {;
    const lengthEl = length.value;
    let char = "";
    let password = "";

    if(lowerCaseElements.checked){
        char += lowerCaseChar;
    }
    if(upperCaseElements.checked){
        char += upperCaseChar;
    }
    if(numberElements.checked){
        char += numbers;
    }
    if(symbolElements.checked){
        char += symbols;
    }
    if(lengthEl>=8){
        for(let i=0;i<lengthEl;i++){
            let a = Math.floor(Math.random()*char.length);
            password += char[a];
        }
        showpassWord(password);
    }
    else{
        alert("Enter a number greater than or equal to 8");
    }
}

btn.addEventListener("click", generatePassword);