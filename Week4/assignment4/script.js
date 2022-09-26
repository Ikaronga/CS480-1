var errorText = "Error. Incorrect format."

function checkName() {
    var NameExp = /[a-zA-Z\-]+\s[a-zA-Z\-]+/;
    var nameInput = document.getElementById("fullName").value;
    var errorSpan = document.getElementById("fullNameError");
    if (!NameExp.test(nameInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkPassword() {
    var PasswordExp = /([A-Za-z0-9_]{7,})/;
    var passwordInput = document.getElementById("password").value;
    var errorSpan = document.getElementById("passwordError");
    if (!PasswordExp.test(passwordInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkAddress() {
    //I made the pattern on this one to require a 1-5 digit house code, followed by a street name then type (Lane, Street, Avenue, etc..)
    //I thought this made more sense
    var AddressExp = /^(\d{1,5})\s([a-zA-Z]{1,15})\s([a-zA-Z]{1,10})$/;
    var addressInput = document.getElementById("streetAddress").value;
    var errorSpan = document.getElementById("addressError");
    if (!AddressExp.test(addressInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkZip() {
    var ZipExp = /\d{5,}/;// Since we have a standard zip code in the US I would not leave the max value as black because this means I can enter as many digits as I want as long as they are at least 5. I would put max as 5 or if you want the full zip then 10 inclusing the dash
    var zipInput = document.getElementById("zipCode").value;
    var errorSpan = document.getElementById("zipError");
    if (!ZipExp.test(zipInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkBirth() {
    var BirthExp = /[0-1][0-9]\-[0-3][0-9]\-[1-2]([0-9]{3})/;//For the general layout and some working validation I will give you full points. There is more complex modifications to not match dates like 02-32-1999.
    var birthInput = document.getElementById("dateOfBirth").value;
    var errorSpan = document.getElementById("birthError");
    if (!BirthExp.test(birthInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}

function checkCard() {
    var CardExp = /[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}/;
    var cardInput = document.getElementById("creditCard").value;
    var errorSpan = document.getElementById("cardError");
    if (!CardExp .test(cardInput)) {
        errorSpan.innerHTML = errorText;
    }
    else {
        errorSpan.innerHTML = "";
    }
}