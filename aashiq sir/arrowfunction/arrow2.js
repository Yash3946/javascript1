const america = (amount, name) => ` your tour is confirmed in America because you have` + amount;
const canada = (amount, name) => ` your tour is confirmed in Canada because you have ` + amount;
const dubai = (amount, name) => ` your tour is confirmed in Dubai because you have `+ amount;

let amount = 120000;
let name = "Yash";

if (amount > 90000) 
{
  console.log(america(amount, name));
} 
else if (amount > 70000) 
{
  console.log(canada(amount, name));
} 
else if (amount > 50000) 
{ 
  console.log(dubai(amount, name));
} 
else 
{
  console.log("Your budget is insufficient.");
}

