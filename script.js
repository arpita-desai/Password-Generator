//DOM Element

function generator(){
    //set length of password
    let lengthPassword = document.getElementById("passwordLong").value;
    //password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop for password 
    for(var i = 0; i < lengthPassword; i++){
        
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to display
    document.getElementById("display").value = password;
}