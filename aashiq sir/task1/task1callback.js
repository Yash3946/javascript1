console.log("Bank of India");

var avlbal = 35000;
var pin = 3946;

function checkbal() {
    console.log("Your available balance is " + avlbal);
}

function withdrawal() {
    let amount = parseInt(prompt("Enter your withdrawal amount:"));

    if (amount <= avlbal) {
        avlbal =  avlbal - amount;
        console.log("Successfully withdrawn amount: " + amount);
        console.log("Your current balance is: " + avlbal);
    } else {
        console.log("Insufficient balance.");
    }
}

function deposit() {
    let amount = parseInt(prompt("Enter your deposit amount:"));
    avlbal =  avlbal + amount;
    console.log("Successfully deposited: " + amount);
    console.log("Your new balance is: " + avlbal);
}


function balance(callback) {
    callback();
}

var x = confirm("Do you want to enter the ATM?");
if (x) {
    console.log("Thank you for choosing our ATM.");

    var acc = parseInt(prompt("Enter your account number:"));
    var pass = parseInt(prompt("Enter your password:"));

    if (pin === pass) {
        var choice = parseInt(prompt("Choose an option:\n 1. Check Balance\n 2. Withdrawal\n 3. Deposit"));
        
        switch (choice) {
            case 1:
                balance(checkbal);
                break;
            case 2:
                balance(withdrawal);
                break;
            case 3:
                balance(deposit);
                break;
            default:
                console.log("Invalid option selected.");
        }
    } else {
        console.log("Password is incorrect.");
    }
} else {
    console.log("Thank you for visiting.");
}