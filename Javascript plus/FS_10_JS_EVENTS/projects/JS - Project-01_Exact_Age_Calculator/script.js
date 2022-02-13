const years = document.getElementById("years");

//eventi objectin kendisine tanimlayabilirsiniz. (innerText eklersen tanimlayamazsiniz)
//yukaridaki sebebten dolayi yapadim ben

const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown")
console.log(countdown)

const loading = document.querySelector(".loading");
window.addEventListener("load", ()=>{
    loading.style.display = "block";//block goster demek oluyor!

    /* miliseconds in setTimeout */
    setTimeout(()=>{
        loading.style.display = "none";
        countdown.style.display = "flex"
    }, 2000);
/*     years.innerHTML = "00";
    months.innerHTML = "00";
    days.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00"; */

    let H2Elements = documents.getElementsByTagName
    ("h2");
    console.log(H2Elements);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

});



















