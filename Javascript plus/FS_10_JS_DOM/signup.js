//DOM Accessing

let firstNameById = document.getElementById("first_name") ;
console.log(firstNameById);

let lastNameById = document.getElementById("last_name") ;
console.log(lastNameById);

/* let firstNameByClassName = document.getElementsByClassName("input--style-4"); //cogul oldugu icin HTML collection verir.
console.log(firstNameByClassName); */

/* let firstNameByClassName = document.getElementsByClassName("input--style-4")[0]; //cogul oldugu icin HTML collection verir.
console.log(firstNameByClassName); */

/* let firstNameByName = document.getElementsByName("first_name");
console.log(firstNameByName);
 */

/* let firstNameBySelector = document.querySelector("#first_name");
console.log(firstNameBySelector); */

/* let firstNameBySelectorClass = document.querySelector(".input--style-4"); //bu òartlara uyan ilk elemani dondurur
console.log(firstNameBySelectorClass); */  

/* let firstNameBySelectorName = document.querySelector("[name=first_name]")
console.log(firstNameBySelectorName);
 */

//property vs attribute


/* console.log(firstNameById.getAttribute("id"));
console.log(firstNameById.getAttribute("class")); */
/* firstNameById.setAttribute("class", "redColorClass");
firstNameById.setAttribute("type", "radio")
 */

//InnerHTML, innerText, textContent, (input=> value)

let headerDiv = document.getElementById("headerId");
/* console.log("innerHTML", headerDiv.innerHTML);
console.log("innerText", headerDiv.innerText);
console.log("TextContent", headerDiv.textContent); */


/* firstNameById.value = "Resul"; */
/* firstNameById.setAttribute("value", "Resul")
lastNameById.value = "Avsar"; */

//Class example
/* let fullNameById = document.getElementById("full_name")
console.log(fullNameById); */

//fullNameById.setAttribute("value", "Resul Avsar");
//fullNameById.value = "Resul Avsar"
//fullNameById.value = `${firstNameById.value.toUpperCase()} ${lastNameById.value.toUpperCase()}`



/* let email = document.getElementById("email")
console.log(email); */

//email.setAttribute("value", "resul.avsar@clarusway.com")
//email.value = `${firstNameById.value.toLowerCase()}.${lastNameById.value.toLowerCase()}@cw.com`


//Create logo element

let logo = document.createElement("img");
console.log(logo);
logo.setAttribute("src", "img/logo.png");
logo.setAttribute("class", "headerLogo");

headerDiv.appendChild(logo);   







