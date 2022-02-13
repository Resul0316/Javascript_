// DOM recap, DOM traversing

/* let navbarPathItemText = document.getElementsByClassName
("nav__item")[0].innerText;
console.log(navbarPathItemText);

let navbarPathItemText2 = document.getElementsByClassName("nav__link")
[0].innerText;
console.log(navbarPathItemText2);

//going through children
let navbarPathItemText3 = document.getElementsByClassName("nav__links")
[0].children[0].innerText;
console.log(navbarPathItemText3);

//collection dondurur
//firstElementChild
let navbarPathItemText4 = document.getElementsByClassName("nav__links")
[0].firstElementChild.innerText
console.log(navbarPathItemText4); */


/* let navbarPathsLi = document.querySelector(".nav__item");
console.log(navbarPathsLi);

//query selector and querySelectorAll farki are in this section
let navbarPathsLi2 = document.querySelector(".nav__links").firstElementChild;
console.log("ul==>> first li",navbarPathsLi2);

let navbarSignUpLi = document.querySelector(".nav__links").lastElementChild;
console.log("ul==>> last li--->>", navbarSignUpLi.innerText); */



//**querySelectorAll nad getElementById nodelist doner**//
//*** getElementsByClassName HTML collection donedurur**//
/* let navbarInstructorsLi = document.querySelectorAll
(".nav__item")[1].innerText;
console.log(navbarInstructorsLi);



let navbarStudentsLi = document.querySelectorAll
(".nav__item")[2].innerText;
console.log(navbarStudentsLi); */


//second part of the class
//Event listener

/* let navbarPathsLi = document.querySelector(".nav__item");
console.log(navbarPathsLi);

//window.addEventListener("event", function())
window.addEventListener("load", ()=> {
    console.log("window loaded");
})

//onload en guncel olandir!
window.onload = () => {
    console.log("window onloaded");
 }

 window.addEventListener("click", (e)=> {
     alert(navbarPathsLi.innerText + e + " clicked");
 })

 //homework
 window.onmouseover = () => {
     console.log("window onmouseover");
 }
 */

/*  let navbarInstructorsLi = document.querySelectorAll
 (".nav__item")[1];
 console.log(navbarInstructorsLi);

 navbarInstructorsLi.addEventListener("mouseover", ()=>{
    navbarInstructorsLi.innerText = "Over me!" ;
    navbarInstructorsLi.style.color = "green" ;
    navbarInstructorsLi.style.fontSize ="1.7rem" ;
 });

 navbarInstructorsLi.addEventListener("mouseout", ()=>{
    navbarInstructorsLi.innerText = "Instructors" ;
    navbarInstructorsLi.style.color = "#444444" ;
    navbarInstructorsLi.style.fontSize ="1.7rem" ;
 }); */


//Highly important

/* document.getElementsByClassName, document.getElementsByTagName ==> Html Collection

document.getElementsByName, document.querySelectorAll ==> NodeList

document.getElementById, document.querySelector ==> tek element
 */


/*  let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
 console.log(navbarStudentsLi);
 // 🔥🔥🔥🔥🔥  rgb rndom color(rgb(255,255,255) 
 //onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random() * 255)
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, 
${randomNumber()})`
console.log(randomColor());
//li
navbarStudentsLi.addEventListener("click", () => {
    //to stop bubbling
    //event.stopPropagation();
    navbarStudentsLi.style.backgroundColor = randomColor() ;
})
//ul
navbarStudentsLi.addEventListener("click", (event) =>{
    navbarStudentsLi.parentElement.style.backgroundColor = randomColor() ;
})
//header
navbarStudentsLi.parentElement.parentElement.addEventListener("click", (event)=>{
    navbarStudentsLi.parentElement.parentElement.style.backgroundColor = randomColor();
});  */

/*  */
//last name input value 0 oldugunda span gozukmesin

/* lastName.addEventListener("ended", () => {
    charSpan.innerText = lastName.value.display + "none"
})

 */

let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.addEventListener("change", ()=>{
    console.log(birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value)
    .getFullYear();
    alert("You are " + year + "years old.")
} ); 











/* let lastName = document.querySelector("input[name = last_name]");
let charSpan = document.getElementById("charCount");

lastName.addEventListener("keyup", () => {
    charSpan.innerText = lastName.value.length + "/40" ;
}) 

//last name input value 0 oldugunda span gozukmesin!!


let birthDayPicker = document.querySelector("[name=birthday]"); */





