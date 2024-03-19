let principleAmt = document.querySelector("#pamt");
let interestRate = document.querySelector("#interest-rate");
let tenure = document.querySelector("#tenure");

let btn = document.querySelector(".btn-container");
let msgContainer = document.querySelector(".msg-container");

const showMsg = (MaturityAmt) => {
    msgContainer.textContent = `Maturity Amount is ₹${MaturityAmt}`;
}

const calculateMA = () => {
    if(principleAmt.value<0 || interestRate.value<0 || tenure.value<0){
        principleAmt.value = 0;
        interestRate.value = 0;
        tenure.value = 0;
        alert("Positive Number is Required");
    }
    let interestRateinPA = interestRate.value/100;
    let MaturityRate = (principleAmt.value*interestRateinPA*tenure.value);
    let MaturityAmt = MaturityRate + Number(principleAmt.value);
    showMsg(MaturityAmt);
}

btn.addEventListener("click", () =>{
   calculateMA();
})