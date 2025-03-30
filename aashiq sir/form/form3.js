function submitHandler(e)
{
    e.preventDefault();
    var name = document.getElementById("name")

    var gen = '';

    var gender = document.getElementsByName("gender")

    if(gender[0].checked===true)
    {
        gen ="male";
    }
    else if(gender[1].checked===true)
    {
        gen = "female";
    }
    else if(gender[2].checked===true)
    {
        gen = "other";
    }

    var age = document.getElementById("age")

    if(gen==="male" && age.value > 18)
    {
        console.log("You are eligable for vote..");
    }
    else if(gen==="female" && age.value > 22)
    {
        console.log("ou are eligable for vote..")
    }
    else if(gen==="other" && age.value > 25)
    {
        console.log("ou are eligable for vote..")
    }
    else
    {
        console.log("You are not eligable for vote..");
    }
}

// console.log("Name = ",Name.value);
// console.log("Gender = ",gen);
// console.log("Age = ",age.value);
