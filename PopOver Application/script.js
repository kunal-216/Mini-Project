let RemoveBtn = document.querySelector("#pop-btn");
let ShowBtn = document.querySelector("#btn");
let container = document.querySelector(".container");

const showPopOver = () => {
    container.classList.remove("hide");
    ShowBtn.classList.add("hide");
}

const removePopOver = () => {
    container.classList.add("hide");
    ShowBtn.classList.remove("hide");
}

container.classList.add("hide");

ShowBtn.addEventListener("click" , showPopOver);
RemoveBtn.addEventListener("click", removePopOver);