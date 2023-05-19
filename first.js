// -- Language contruct
// -- variables and data types
// -- control structures
// -- Functions

// document.body.style.backgroundColor = "blue"
// document.body.querySelector("#btn").onclick = ()=>{
// document.body.querySelector("h1").className = "js"

// }

// DRY
// YAGNI

// function
const redirectUser = ()=>{
    alert("Please wait while we redirect you...")
    location.href = "second.html"
}
// alert('hello world')
let age = prompt("How old are you")
alert(`Wow you are ${age} years old`)

if (age < 18)
{
    redirectUser()
}
else if(age > 60){
    redirectUser()
}



// datatypes