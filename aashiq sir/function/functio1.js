function america(amount,name)
{
    return name + " your tour is confirm in america "  + amount
}
function canada(amount,name)
{
    return name + " your tour is confirm in canad "  + amount
}
function dubai(amount,name)
{
    return name + " your tour is confirm in dubai "  + amount
}

amount = 120000;
name = "yash"

if(amount > 90000)
{
  console.log(america(amount,name))  
}
else if(amount > 70000)
{
      console.log(canada(amount,name))  
}
else if(amount > 90000)
{
      console.log(dubai(amount,name))  
}
else
{
    console.log("your budget is insufficient")
}

        