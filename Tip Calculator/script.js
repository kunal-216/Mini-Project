let billAmt = document.querySelector("#billAmt");
let tipPct = document.querySelector("#tipPct");
let btn = document.querySelector(".btn");
let tipAmtMsg = document.querySelector("#tipAmt");
let totalAmtMsg = document.querySelector("#totalAmt");

const showMsg = (tip,bill) => {
    tipAmtMsg.innerHTML = `Tip Amount: ₹${tip}`;
    totalAmtMsg.innerHTML = `Total Amount: ₹${bill}`;
}

btn.addEventListener("click", () => {
    if(tipPct.value>=0 && billAmt.value>=0){
        let tip = (tipPct.value/100)*(billAmt.value);
        let bill = Number(billAmt.value) + Number(tip);
        showMsg(tip,bill);
    }
    else{
        alert("Enter a valid number");
    }
})