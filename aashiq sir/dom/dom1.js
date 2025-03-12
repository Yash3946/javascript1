// console.log(document.getElementById("text").innerHTML)
var x = document.getElementById("text")
console.log(x)
x.innerHTML = "India"
x.style.backgroundColor= "orange";
x.style.color = "white";
x.style.height = "200px";
x.style.width = "200px";

function changetext ()
{
    var text = document.getElementById("text");
    text.innerHTML = "we love india";
    text.style.color = "blue";
    text.style.backgroundColor = "green";
    text.style.color = "white";
    text.style.height = "200px";
    text.style.width = "200px";
}