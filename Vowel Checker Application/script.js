let inputField = document.querySelector("#vowel-container");
let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg-container");
let para = document.querySelector(".para");

const showMsg = (count) => {
    para.innerHTML = `Total vowels : ${count}`;
}

btn.addEventListener("click", () => {
    let text = inputField.value;
    let count = 0;
    for(let i=0;i<text.length;i++){
        if(text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u' || text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U'){
            count++;
        }
    }
    showMsg(count);
});