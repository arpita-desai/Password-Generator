
//Dom element

//var passwordDisplay = document.getElementById("display");
var generate = document.getElementById("myBtn");

//Ask users preferences

var passwordLength = prompt("How long your password should be?");
    // if(passwordLength < 8 || passwordLength === null){
    //       alert("Password length should be at least 8");
    //       var passwordLength = prompt("How long your password should be?");
    //      //return ''; 
    // }    
while(passwordLength < 8 || passwordLength === null){
    alert("Password length should be at least 8");
    var passwordLength = prompt("How long your password should be?");
    
}

var lowerCase = confirm("Do you want lowercase letter in password?");
var upperCase = confirm("Do you want uppercase letter in password?");
var symbols = confirm("Do you want special character in password?");
var numbers = confirm("Do you want numbers in password?");



//creating function for random string generations


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbols(){
    const symbols = "!@#$%^&*()_+<>?,.{}[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generate.addEventListener("click", checkForPassword);

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	numbers: getRandomNumber,
	symbols: getRandomSymbols
};

//main function to generate password
 function checkForPassword(){

   //+ unary operator convert string into number
    var length = +passwordLength;
    var hasLower, hasNumber, hasUpper, hasSymbol;
        
        if(lowerCase){
             hasLower = 1;
        }else hasLower = 0;
    
        if(upperCase){
            hasUpper = 1;
        }else hasUpper = 0;
    
        if(symbols){
            hasSymbol = 1;
        }else hasSymbol = 0;

        if(numbers){
             hasNumber = 1;
        }else hasNumber = 0;
    
       console.log(length, hasLower, hasNumber, hasUpper, hasSymbol);

        generator(hasLower, hasUpper, hasNumber, hasSymbol, length);
       
 }

 //For password generator
 function generator(lower, upper, numbers, symbols, length){

    var password = "";

    const typesCount = lower + upper + numbers + symbols;
    
    console.log(typesCount);
    
    const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
        return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			password += randomFunc[funcName]();
		});
	}
	
	//const finalPassword = password.slice(0, length);
   
    document.getElementById("display").value = password;
}
    
