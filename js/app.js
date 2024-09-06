//! DOM SELECTION SECTION

//? Four main types of selection elements from the HTML

//* 1. getElementById
//? Grabs a single node based on the ID name;

let listItemThree = document.getElementById("thirdListItem");

//* 2. getElementsByClassName
//? Makes an array of elements with the same className

let headerColumns = document.getElementsByClassName("col-6");
console.log(headerColumns);
//? Can call single indexs of that HTML Collection
console.log(headerColumns[1]);


//* 3. querySelector/querySelectorAll
//? Both of these dom selections do the same as above but uses CSS styling selection.
let listItemOne = document.querySelector(".aboutMe li:first-child");

console.log(listItemOne);

//? Puts all the li elements in an array
let allListItems = document.querySelectorAll(".aboutMe li");
console.log(allListItems);


//! DOM Styling and Changing text 

let description = document.querySelector(".textSide p:first-child");

//* .innerHTML is a DOM method to change text.
description.innerHTML = "Bob Ross was a calm and amazing painter, that tragically died to smoking."

//* .style gives you the option of changing the elements css properties from Javascript
//! https://www.w3schools.com/cssref/index.php
//? Reference to each javascript styling syntax 

description.style.fontSize = "25px"


//! Adding Properties Values to an array of nodes;
//? Makes sure when you're calling a method for DOM element to ONLY affect one item at a time.
let allPTags = document.querySelectorAll(".textSide p");
console.log(allPTags);

//? TARGET AN INDEX of that array list of nodes to change properties
allPTags[1].style.fontSize = "60px"

function changeParagraphColor() {
    for (let i = 0; i < allPTags.length; i++) {
        const element = allPTags[i];
        
        allPTags[i].style.color = "tomato"
    }
}

changeParagraphColor();


//! DOM EventListeners

//? EventListeners are waiting for a type of event to fire off ("Click, Hover, keydown etc.") and if the event is clicked a function will run.

let imageElement = document.querySelector(".imageSide img");
let  pFirstColumns = document.querySelectorAll(".firstCol p");

imageElement.addEventListener("click", reColorParagraphs)

function reColorParagraphs() {
    for (let i = 0; i < pFirstColumns.length; i++) {
        const currentParagraph = pFirstColumns[i];
        
        pFirstColumns[i].style.color = "yellow";
    }
}


//* Getting text from a input box

let firstName = document.getElementById("fName");
let signUpButton = document.getElementById("completeSignUp");
let fNameInfo = "";
//* to get text from a input box use ".value" 
//console.log(firstName.value);

//? This event listener is consistenly watching input changes
// firstName.addEventListener("input", () => {
//     fNameInfo = firstName.value
//     console.log(fNameInfo);
// })

//? This eventListener will run if a BUtton is pressed.
signUpButton.addEventListener("click", () => {
    

    if (firstName.value == false) {
        confirm(" Can't submit an empty value")
    } else {
        fNameInfo = firstName.value;
        console.log(fNameInfo);
    }
})



//! CREATING ELEMENTS and REMOVING

//? Creating Elements
let paragraphFirstBox = document.createElement("p");
paragraphFirstBox.innerHTML = "Hello World!"
console.log(paragraphFirstBox);
let divSecondBox = document.createElement("div")
console.log(divSecondBox);


//? Sending these created elements to the INDEX.html page
let divFirstBox = document.querySelector(".firstBox")
console.log(divFirstBox);
//* APPEND
divFirstBox.append(paragraphFirstBox);

//? ADding another Column to a row class
let creationRow = document.querySelector(".creationOfelements .row");
console.log(creationRow);

creationRow.append(divSecondBox);

//! Add and remove classes for styling purposes

divSecondBox.classList.add("col-4");

divFirstBox.classList.remove("d-none");