// alert == pop up gargaj irnee
// DOM Document object model

// document.getElementById("id")  // elementiig id-aar ni avna
// document.getElementsByClassName("class") // elementiig class-aar ni avna
// document.getElement.querySelector("#Misheel") 

// function myFunction(name)
    // console.log("hello world", name); 
// myFunction("sumya");

// Arrow function
// () => {}


var img = document.getElementById("img")
var label = document.getElementById("label")
var btn = document.getElementById("btn")
var body = document.body

btn.onclick = function() {
    if (img.src.includes("night.jpg")) {
        img.src = "./img/day.png"
        label.innerText = "Day"
        body.style.backgroundColor = "yellow"
    } else {
        img.src = "./img/night.jpg"
        label.innerText = "Night"
        body.style.backgroundColor = "gray"
    }
}