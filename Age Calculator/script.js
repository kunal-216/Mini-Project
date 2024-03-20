let todaysDate = document.querySelector('#date-input');
let dobDate = document.querySelector('#dob-input');
let btn = document.querySelector(".btn");
let msg = document.querySelector(".para");

const showMsg = (age) => {
    msg.innerHTML = `Your Age is ${age} years`;
}

btn.addEventListener("click", () => {
    let dob = new Date(dobDate.value);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if(today.getMonth() < dob.getMonth || ((today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))){
        age--;
    }
    showMsg(age);
});