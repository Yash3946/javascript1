function printTxt(){
    var name = document.getElementById("name");
    var nameErr = document.getElementById("nameErr");

    console.log(name.value);

    if(name.value.length < 3)
    {
        // alert("Name should be at least 3 characters..");
        nameErr.innerHTML = "Name should be at least 3 characters"
        nameErr.style.color = "red";
        name.style.outline = "2px solid red";
    }
    else{
        nameErr.innerHTML = name.value;
        name.style.outline = "2px solid green";
    }


    
}

function printAge(){
    var age = document.getElementById("age")
    console.log(age.value);

    if(age.value.length <1)
        {
            // alert("Name should be at least 3 characters..");
            ageErr.innerHTML = "Name should be at least 3 characters"
            ageErr.style.color = "red";
            agg.style.outline = "2px solid red";
        }
        else{
            ageErr.innerHTML = age.value;
            age.style.outline = "2px solid green";
        }
    
    
}