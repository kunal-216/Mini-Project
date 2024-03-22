let addBtn = document.querySelector(".Addbtn");
let msg = document.querySelector(".para");
let listContainer = document.querySelector(".add-list");

const showMsg = (amount) => {
    msg.innerHTML = `TOTAL EXPENSE: ₹${amount}`;
}

const addExpense = () => {
    let expenseDescription = prompt("Enter the Expense Description: ");
    let expenseAmt = prompt("Enter the Amount of Expense: ");

    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listContainer.appendChild(listItem);
    
    let deletExpenseBtn = document.createElement("button");
    deletExpenseBtn.textContent = "X";
    deletExpenseBtn.classList.add("deleteBtn");

    let expenseDescriptionDiv = document.createElement("div");
    let expenseAmtDiv = document.createElement("div");

    expenseDescriptionDiv.classList.add("expense-des-div");
    expenseAmtDiv.classList.add("expense-amt-div");

    listItem.appendChild(expenseDescriptionDiv);
    listItem.appendChild(expenseAmtDiv);
    listItem.appendChild(deletExpenseBtn);

    expenseDescriptionDiv.innerText = `${expenseDescription}`;
    expenseAmtDiv.innerText = `₹${expenseAmt}`; 
    
    deletExpenseBtn.addEventListener("click", () => {
        listItem.remove();
    });

    let totalAmt = 0;
    let amount = parseFloat(expenseAmt);
    if(isNaN(amount)){
        console.log("Not a number");
        alert("Please enter a valid number");
    }
    else{
        console.log("hello");
        totalAmt += amount;
    }
    showMsg(totalAmt);
}

addBtn.addEventListener("click", () => {
    addExpense();
});