var registerButton = document.getElementById("button_register");

registerButton.addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let dob = document.getElementById("dob").value;
    let genders = document.getElementsByName("gender");
    let tac = document.getElementById("tac").checked;

    if (validate_email(email) &&
        validate_password(password) &&
        validate_address(address) &&
        validate_dob(dob) &&
        validate_genders(genders) &&
        tac) {
        alert("Registration Successful!");
        window.location.replace("home.html");
    }
});

function validate_email(email) {

    if (!email) {
        alert("Email must be filled!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email must include '@'!");
        return false;
    }

    if (email.indexOf("@", email.indexOf("@") + 1) != -1) {
        alert("Email must only have 1 '@'!");
        return false;
    }

    if (email.charAt(0) == "@" || email.charAt(email.length - 1) == "@") {
        alert("'@' cannot be in the beginning or the end of Email!");
        return false;
    }

    if (!email.includes(".")) {
        alert("Email must include '.'!");
        return false;
    }

    if (email.charAt(0) == "." || email.charAt(email.length - 1) == ".") {
        alert("'.' cannot be in the beginning or the end of Email!");
        return false;
    }

    if (email.charAt(email.indexOf("@") + 1) == "." || email.charAt(email.indexOf("@") - 1) == ".") {
        alert("'.' cannot be beside '@'!");
        return false;
    }

    if (email.indexOf(".", email.indexOf("@")) == -1) {
        alert("at least 1 '.' must be after '@'!");
        return false;
    }

    if (email.indexOf(" ") != -1) {
        alert("Email cannot contain spaces!");
        return false;
    }

    return true;
}

function validate_password(password) {
    if (!password) {
        alert("Password must be filled!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;
    }
    return true;
}

function validate_address(address) {
    if (!address) {
        alert("Address must be filled!");
        return false;
    }
    return true;
}

function validate_dob(dob) {
    if (!dob) {
        alert("Date of Birth must be filled!");
        return false;
    }

    if (!validate_date_format(dob)) {
        alert("Invalid date!");
        return false;
    }

    if (!validate_date_less_than_today(dob)) {
        alert("Date of Birth must be before today!");
        return false;
    }

    return true;
}

function validate_date_format(date) {
    let splitRes = date.split("/");
    let datesWith30Days = [4, 6, 9, 11];

    if (splitRes.length != 3) {
        return false;
    }

    if (!splitRes[0] || !splitRes[1] || !splitRes[2]) {
        return false;
    }

    if (isNaN(splitRes[0]) || isNaN(splitRes[1]) || isNaN(splitRes[2])) {
        return false;
    }

    if (parseInt(splitRes[0]) < 0 || parseInt(splitRes[1]) < 0 || parseInt(splitRes[2]) < 0) {
        return false;
    }

    if (parseInt(splitRes[1]) > 12) {
        return false;
    }

    if (parseInt(splitRes[0]) > 31) {
        return false;
    }

    if (datesWith30Days.includes(parseInt(splitRes[1])) && parseInt(splitRes[0]) > 30) {
        return false;
    }

    if (parseInt(splitRes[1]) == 2 && parseInt(splitRes[0]) > 29) {
        return false;
    }

    if (parseInt(splitRes[1]) == 2 && !isLeapYear(parseInt(splitRes[2])) && parseInt(splitRes[0]) > 28) {
        return false;
    }

    return true;
}

function validate_genders(genders) {
    if (!genders[0].checked && !genders[1].checked) {
        alert("Gender must be selected!");
        return false;
    }
    return true;
}

function validate_date_less_than_today(date) {
    let splitRes = date.split("/");
    let newDateFormat = splitRes[1] + "/" + splitRes[0] + "/" + splitRes[2];
    let today = new Date();

    today.setHours(0, 0, 0, 0);

    return (new Date(newDateFormat) < today);
}

function isLeapYear(year) {
    return (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0));
}