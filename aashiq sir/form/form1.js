function submitHandler(event){

    event.preventDefault();

    var output = document.getElementById('output');
    var nameErr = document.getElementById('nameErr');


    var name = document.getElementById("name")
    var email = document.getElementById("email")

    if(name.value.length == 0)
    {
        // alert("*Name is required")
        nameErr.innerHTML = "*Name is required";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 2)
    {
        nameErr.innerHTML = "*Name must be at least 4 characters."
    }
    else{
        nameErr.innerHTML = "";
    }





    // output.innerHTML = name.value + " " + email.value

    // console.log("name =",name.value);
    // console.log("email =",email.value);
    

    // var user = {
    //     name:name.value,
    //     email:email.value
    // }

    // // output.innerHTML = user
    // var ans = JSON.stringify(user);
    // output.innerHTML = ans;

    // console.log(ans[0]);
    

    // console.log(user);
    


    // alert("Form submitted...");
    console.log("Form submitted...");
    
}
