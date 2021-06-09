var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

console.log(body);



console.log(css);
console.log(color1);
console.log(color2);
 
function setGradient()
{
    body.style.background=
    "linear-gradient(to right, "
    +color1.value
    +", "
    +color2.value
    +")";

    css.textContent=body.style.background+";";
}
/*color1.addEventListener("input",function()
{
   setGradient();
   //console.log(color1.value)
})*/

//but the below type will not work(no need of passing ())
//because we don't need to call the function,
//this will be tigeered automatically when receives new input
//color1.addEventListener("input",setGradient())
//color2.addEventListener("input",setGradient())

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);