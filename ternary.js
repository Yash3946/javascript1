// A=12
// B=13
// C=15
// let x = (A > B) ? (A > C ? A : C) : (B > C ? B : C);
// console.log(x + " is greater")

        //sum of all numbers there are above in 35

// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));
// let num3 = parseInt(prompt("Enter third number:"));

// let count = 0;
// let sum = 0;

if (num1 >= 35) 
{
  count++;
  sum += num1;
}

if (num2 >= 35) 
{
  count++;
  sum += num2;
}

if (num3 >= 35) 
{
  count++;
  sum += num3;
}

if (count === 3) 
        {
        console.log("All numbers are above 35. Sum : ", sum);
        } 
else if (count === 2) 
        {
        console.log("Two numbers are above 35. Sum : ", sum);
        } 
else if (count === 1) 
        {
        console.log("One number is above 35. Number : ", sum);
        } 
else 
        {
        console.log("Please enter numbers above 35.");
        }
