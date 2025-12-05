var fullName = firstName + " " + lastName;

alert("Hello " + fullName + "! Welcome ");

//Q-2

var favModel = prompt("Enter your favorite mobile phone model:");

document.write("Your favorite mobile phone model is: " + favModel + "<br>");
document.write("Length of input: " + favModel.length);

//Q-3

var word = "Pakistani";

var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);

//q-4
var text = "Hello World";

var lastIndex = text.lastIndexOf("l");

document.write("String: " + text + "<br>");
document.write("Last index of 'l': " + lastIndex);

//q-5
var word = "Pakistani";

var charAtIndex = word.charAt(3);

document.write("String: " + word + "<br>");
document.write("Character at 3rd index: " + charAtIndex);

//q-6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello " + fullName + "! Welcome ");

//Q-7

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.write("Original Word: " + city + "<br>");
document.write("After Replacement: " + newCity);

//Q-8

var message = "Ali and Sami are best friends. They play cricket and football together.";

var newMessage = message.replace(/and/g, "&");

document.write("Original Message: " + message + "<br>");
document.write("After Replacement: " + newMessage);


//Q-9\

var str = "472";          
var num = Number(str);    

document.write("VALUE : " + str + "<br>");
document.write("TYPE : " + typeof(str) + "<br><br>");

document.write("VALUE : " + num + "<br>");
document.write("TYPE : " + typeof(num));


//Q-10

var userInput = prompt("Enter any text:");

var upperCase = userInput.toUpperCase();

document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCase);

//Q-11
var userInput = prompt("Enter any text:");

var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write("User Input: " + userInput + "<br>");
document.write("Title Case: " + titleCase);

//Q-12
var num = 35.36;

var str = num.toString();     // Convert number to string
var result = str.replace(".", "");   // Remove dot

document.write("Original Number: " + num + "<br>");
document.write("Result): " + result);

//Q-13
var username = prompt("Enter your username:");

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);

    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        alert("Invalid Username! Please enter a valid username without [@ . , !]");
        username = prompt("Enter a valid username:");
        break;
    }
}

document.write("Your Username: " + username);

//Q-14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("What do you want to order?");

var search = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === search) {
        found = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}

if (!found) {
    alert("Sorry! " + userInput + " is not available in our bakery.");
}

//Q-15
function isValidPassword(password) {
    if (password.length < 6) {
        return false;
    }

    var firstChar = password.charCodeAt(0);
 
    if (firstChar >= 48 && firstChar <= 57) {
        return false;
    }

    var hasLetter = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasLetter = true;
        }

       
        if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }

    return hasLetter && hasNumber;
}

var password = prompt("Enter your password:");

while (!isValidPassword(password)) {
    password = prompt("Invalid password! Please enter a valid password (min 6 chars, must contain letters and numbers, and cannot start with a number):");
}

document.write("Password accepted!");

//Q-16
var university = "University of Karachi";

var arr = university.split("");

document.write("Elements of the array:<br>");


for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//Q-17
var userInput = prompt("Enter any text:");

var lastChar = userInput.charAt(userInput.length - 1);

document.write("User Input: " + userInput + "<br>");
document.write("Last Character: " + lastChar);

//Q-18
var text = "The quick brown fox jumps over the lazy dog";

var lowerText = text.toLowerCase();

var words = lowerText.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'" );