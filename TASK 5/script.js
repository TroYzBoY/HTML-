const name = document.getElementById('name');
const result = document.getElementById("result");

name.addEventListener("input", function() {
    console.log(name.value);
    result.textContent = name.value;});