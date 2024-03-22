let input = document.querySelector("#input");
let btn = document.querySelector(".btn");
let para = document.querySelector(".para");

const showMsg = (character) => {
    if(character === 1){
        para.innerHTML = `The entered character is an ASCII Character`;
    }
    else{
        para.innerHTML = `The entered character is an Unicode Character`;
    }
}

const checkChar = () => {
    let inputValue = input.value;
    console.log(inputValue);
    let character = 0 ;
    if(inputValue.charCodeAt(0) <=127){
        character = 1; //ascii
    }
    showMsg(character);
}

btn.addEventListener("click", () => {
    checkChar();
});