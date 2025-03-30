const submitHandler = (e)=>{
    e.preventDefault();
    
    // <!-- (1) insert name -->
    var name = document.getElementById("name");
    var nameErr = document.getElementById('nameErr');

    // <!--(2) insert mobile number  -->
    var mobile = document.getElementById("mobile");
    mobileErr =document.getElementById('mobileErr');

    // <!-- (3) insert email -->
    var email = document.getElementById("email");
    emailerr = document.getElementById("emailerr")

    // <!-- (4) insert password -->
    var password = document.getElementById("password");
    passwordErr =document.getElementById('passwordErr');

    // <!-- (5) insert confirm_password -->
    var confirm_password = document.getElementById("confirm-password");
    confirm_password =document.getElementById('confirm_password');


    // <!-- (1) insert name -->

    var nameRegex = /[A-Z]{1}[a-z]+$/;

    if(name.value.match(nameRegex))
    {
      nameErr.innerHTML =name.value;
    } 
    else{
      nameErr.innerHTML =name.value + " : *please enter first letter is capital";
    }

    // <!--(2) insert mobile number  -->
    var mobileRegex = /[6-9]{1}[0-9]{9}$/;

    if(mobile.value.match(mobileRegex)){
        mobileErr.innerHTML =name.value + " : *please enter only 10 digits and starts for 6 to 9";
    }
    else{
         mobileErr.innerHTML =mobile.value +" : *please enter only 10 digits and starts for 6 to 9";
    }

    // <!-- (3) insert email -->
    var emailRegex = /[a-z0-9]+.@[a-z]+\.[a-z]+$/

    if(email.value.match(emailRegex)){
        emailerr.innerHTML = email.value;
    }
    else{
         emailerr.innerHTML =email.value + " : Email is not valid";
    }


    // <!-- (4) insert password -->
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if(password.value.match(passwordRegex))
    {
      passwordErr.innerHTML = password.value
    }
    else
    {
      passwordErr.innerHTML = password.value + "password is incorrect";
    }

// <!-- (5) insert confirm_password -->
    if(password.value == confirm_password.value)
    {
      confirm_passwordErr.innerHTML = confirm_password.value 
    }
    else
    {
      confirm_passwordErr.innerHTML = confirm_password.value + "confirm_password is incorrect";
    }

}
