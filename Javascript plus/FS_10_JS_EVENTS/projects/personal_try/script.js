/* let containerColor = document.getElementsByClassName
("container");
console.log(containerColor);

containerColor.addEventListener */


let yearClassDiv = document.getElementById
("year").innerText;
console.log(yearClassDiv);

yearClassDiv.addEventListener("click", () =>{
    console.log(yearClassDiv.value);
})


let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.addEventListener("change", ()=>{
    console.log(birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value)
    .getFullYear();
    alert("You are " + year + "years old.")
} ); 