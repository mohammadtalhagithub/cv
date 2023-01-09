// var fullName = "@Mohammad#Talha";
// var lastName = fullName.slice(fullName.indexOf("#") + 1);
// // console.log("Last Name is :" + lastName);

// var firstName = fullName.slice(fullName.indexOf("@") + 1, fullName.indexOf("#") + 0);
// // console.log("First Name is :" + firstName);

// // console.clear();
// var subString = fullName.substring(1,5); // @Moham
// // var sliceString
// console.log(subString);

// var myString = "Mohammad#Talha";
// var mySubString = myString.slice(myString.indexOf("#") + 1, 2); /* char = 5 - 1 */

// console.log(mySubString);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 5);

// document.getElementById("demo").innerHTML = citrus;

// var numbers = "01234#56789";
// var sliced = numbers.slice(2,4); // making cuts before index 2 and index 4.

//////////////////////////////////////
// console.clear();

// var name = prompt("What is your name ?");

// var firstChar = name.slice(0,1);

// var upperCaseFirstChar = firstChar.toUpperCase();

// var restName = name.slice(1, name.length);

// restName = restName.toLowerCase(); // if user inputs upperCase by mistake

// alert(upperCaseFirstChar + restName);
// console.clear();

// alert("Welcome To My Portfolio, press OK to continue...");

//--------------------------------------------------------------------
// var myText = prompt("Who is going to use this website?");
// document.getElementById("top-name").innerHTML = myText;

document.getElementById("change-btn").addEventListener("click", changeUserName);

var myText;

function changeUserName () {
    myText = prompt("Who is going to use this website?");
    document.getElementById("top-name").innerHTML = myText;

}

// document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
// var myElement = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;

// document.querySelector("h1").style.color = "green";
// document.querySelector("h1").innerHTML = "Your Text";
// document.querySelector("h1").innerText = "Your Text";